"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import styles from "./ProjectInitialiser.module.css";

type PackageOption = "essential" | "enhanced" | "signature" | "not-sure";

type ProjectType = "new" | "existing" | "something-else";

type FormData = {
  projectType: ProjectType | "";
  package: PackageOption | "";

  businessName: string;
  businessDescription: string;
  projectGoal: string;

  existingWebsite: boolean;
  existingBranding: boolean;
  needsBranding: boolean;
  instalments: boolean;
  reducedRate: boolean;

  name: string;
  email: string;
  phone: string;
};

const initialForm: FormData = {
  projectType: "",
  package: "",

  businessName: "",
  businessDescription: "",
  projectGoal: "",

  existingWebsite: false,
  existingBranding: false,
  needsBranding: false,
  instalments: false,
  reducedRate: false,

  name: "",
  email: "",
  phone: "",
};

const stages = ["PROJECT", "PACKAGE", "BRIEF", "DETAILS", "CONTACT"];

export default function ProjectInitialiser() {
  const searchParams = useSearchParams();

  const incomingPackage = searchParams.get("package");

  const validIncomingPackage = useMemo(() => {
    if (
      incomingPackage === "essential" ||
      incomingPackage === "enhanced" ||
      incomingPackage === "signature"
    ) {
      return incomingPackage;
    }

    return "";
  }, [incomingPackage]);

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>(initialForm);

  const [transmitting, setTransmitting] = useState(false);
  const [displayStep, setDisplayStep] = useState("01");

  const [stageDirection, setStageDirection] = useState<"forward" | "back">(
    "forward",
  );

  const [stageChanging, setStageChanging] = useState(false);

  const scrambleTimer = useRef<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const [transmitStage, setTransmitStage] = useState(0);

  useEffect(() => {
    if (!validIncomingPackage) {
      return;
    }

    setFormData((current) => ({
      ...current,
      package: validIncomingPackage,
    }));
  }, [validIncomingPackage]);
  useEffect(() => {
    if (scrambleTimer.current) {
      window.clearInterval(scrambleTimer.current);
    }

    const finalValue = String(step).padStart(2, "0");

    const characters = ["03", "08", "14", "21", "--", "07", "11", finalValue];

    let index = 0;

    scrambleTimer.current = window.setInterval(() => {
      setDisplayStep(characters[index] ?? finalValue);

      index += 1;

      if (index >= characters.length) {
        if (scrambleTimer.current) {
          window.clearInterval(scrambleTimer.current);
        }

        setDisplayStep(finalValue);
      }
    }, 45);

    return () => {
      if (scrambleTimer.current) {
        window.clearInterval(scrambleTimer.current);
      }
    };
  }, [step]);
  function updateField<K extends keyof FormData>(field: K, value: FormData[K]) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function changeStep(next: number, direction: "forward" | "back") {
    if (stageChanging) {
      return;
    }

    setStageDirection(direction);
    setStageChanging(true);

    window.setTimeout(() => {
      setStep(next);

      window.setTimeout(() => {
        setStageChanging(false);
      }, 30);
    }, 260);
  }

  function nextStep() {
    changeStep(Math.min(step + 1, 5), "forward");
  }

  function previousStep() {
    changeStep(Math.max(step - 1, 1), "back");
  }

  function handleProjectSelect(value: ProjectType) {
    updateField("projectType", value);

    window.setTimeout(() => {
      changeStep(2, "forward");
    }, 420);
  }

  function handlePackageSelect(value: PackageOption) {
    updateField("package", value);

    window.setTimeout(() => {
      changeStep(3, "forward");
    }, 420);
  }

  function canContinueBrief() {
    return (
      formData.businessName.trim() !== "" &&
      formData.businessDescription.trim() !== "" &&
      formData.projectGoal.trim() !== ""
    );
  }

  function canSubmit() {
    return formData.name.trim() !== "" && formData.email.trim() !== "";
  }

  async function handleTransmit() {
    if (!canSubmit()) {
      return;
    }

    setTransmitting(true);
    setTransmitStage(1);

    try {
      await wait(600);

      setTransmitStage(2);

      const selectedDetails = [
        formData.existingWebsite && "Already has a website",
        formData.existingBranding && "Already has branding",
        formData.needsBranding && "Needs help with branding",
        formData.instalments && "Would like to discuss instalments",
        formData.reducedRate && "Would like to ask about a reduced rate",
      ].filter(Boolean);

      const payload = {
        access_key: "4c47710e-8cde-47d0-a82e-cfbcc09180a0",

        subject: `New Periot Digital enquiry — ${
          formData.businessName || formData.name
        }`,

        name: formData.name,
        email: formData.email,

        phone: formData.phone || "Not provided",

        project_type: formData.projectType || "Not specified",

        package: formData.package || "Not specified",

        business_name: formData.businessName,

        business_description: formData.businessDescription,

        website_goal: formData.projectGoal,

        project_details:
          selectedDetails.length > 0
            ? selectedDetails.join(", ")
            : "None selected",

        from_name: "Periot Digital Website",
      };

      setTransmitStage(3);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setTransmitStage(4);

      await wait(700);

      setTransmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error("Contact form error:", error);

      setTransmitting(false);

      alert(
        "Sorry — your enquiry could not be sent. Please try again or email contact@periotdigital.co.uk.",
      );
    }
  }

  if (submitted) {
    return (
      <main className={styles.contact}>
        <SpaceBackground />

        <Link href="/enter" className={styles.exit}>
          ◄ RETURN
        </Link>

        <section className={styles.success}>
          <div className={styles.successCore}>
            <div className={styles.successCoreInner} />
          </div>

          <p className={styles.systemLabel}>TRANSMISSION COMPLETE</p>

          <h1>ENQUIRY RECEIVED</h1>

          <p>Your project brief has entered the system.</p>

          <span>I&apos;ll be in touch soon.</span>

          <Link href="/enter" className={styles.successAction}>
            RETURN TO STUDIO →
          </Link>
        </section>
      </main>
    );
  }

  if (transmitting) {
    return (
      <main className={styles.contact}>
        <SpaceBackground />

        <section className={styles.transmission}>
          <div className={styles.transmitCore} />

          <p>
            {transmitStage >= 1 && "ENCRYPTING PROJECT BRIEF..."}

            {transmitStage >= 2 && (
              <>
                <br />
                SYNCHRONISING DETAILS...
              </>
            )}

            {transmitStage >= 3 && (
              <>
                <br />
                TRANSMITTING...
              </>
            )}

            {transmitStage >= 4 && (
              <>
                <br />
                CONNECTION ESTABLISHED.
              </>
            )}
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.contact}>
      <SpaceBackground />

      <Link href="/enter" className={styles.exit}>
        ◄ RETURN
      </Link>

      <section className={styles.interface}>
        <header className={styles.header}>
          <div className={styles.headingSystem}>
            <p className={styles.systemLabel}>PERIOT DIGITAL</p>

            <div className={styles.headingAssembly}>
              <div className={styles.headingLine}>
                <span
                  className={`${styles.headingWord} ${styles.projectWord}`}
                  data-text="PROJECT"
                >
                  PROJECT
                </span>

                <span
                  className={`${styles.headingGhost} ${styles.projectGhost}`}
                  aria-hidden="true"
                >
                  PROJECT
                </span>
              </div>

              <div className={styles.headingLine}>
                <span
                  className={`${styles.headingWord} ${styles.initialisationWord}`}
                  data-text="INITIALISATION"
                >
                  INITIALISATION
                </span>

                <span
                  className={`${styles.headingGhost} ${styles.initialisationGhost}`}
                  aria-hidden="true"
                >
                  INITIALISATION
                </span>
              </div>

              <div className={styles.headingScanner} aria-hidden="true" />

              <div className={styles.coordinateMarker} aria-hidden="true">
                <span>+</span>
                <small>X:074 / Y:221</small>
              </div>
            </div>
          </div>

          <div className={styles.stepReadout}>
            <span>PROJECT /</span>

            <strong key={displayStep} className={styles.scramblingNumber}>
              {displayStep}
            </strong>
          </div>
        </header>

        <div className={styles.divider} />

        <Progress currentStep={step} />

        <div
          key={step}
          className={`${styles.stage} ${
            stageChanging
              ? stageDirection === "forward"
                ? styles.stageExitLeft
                : styles.stageExitRight
              : stageDirection === "forward"
                ? styles.stageEnterRight
                : styles.stageEnterLeft
          }`}
        >
          {step === 1 && (
            <ProjectStage
              value={formData.projectType}
              onSelect={handleProjectSelect}
            />
          )}

          {step === 2 && (
            <PackageStage
              value={formData.package}
              onSelect={handlePackageSelect}
              detectedPackage={validIncomingPackage}
            />
          )}

          {step === 3 && (
            <BriefStage formData={formData} updateField={updateField} />
          )}

          {step === 4 && (
            <DetailsStage formData={formData} updateField={updateField} />
          )}

          {step === 5 && (
            <ContactStage formData={formData} updateField={updateField} />
          )}
        </div>

        <footer className={styles.controls}>
          <div>
            {step > 1 && (
              <button
                type="button"
                onClick={previousStep}
                className={styles.backButton}
              >
                ← BACK
              </button>
            )}
          </div>

          <div>
            {step === 3 && (
              <button
                type="button"
                disabled={!canContinueBrief()}
                onClick={nextStep}
                className={styles.nextButton}
              >
                CONTINUE →
              </button>
            )}

            {step === 4 && (
              <button
                type="button"
                onClick={nextStep}
                className={styles.nextButton}
              >
                CONTINUE →
              </button>
            )}

            {step === 5 && (
              <button
                type="button"
                disabled={!canSubmit()}
                onClick={handleTransmit}
                className={styles.transmitButton}
              >
                TRANSMIT ENQUIRY →
              </button>
            )}
          </div>
        </footer>
      </section>
    </main>
  );
}

function ProjectStage({
  value,
  onSelect,
}: {
  value: ProjectType | "";
  onSelect: (value: ProjectType) => void;
}) {
  const whatsappNumber = "447795616533";

  const whatsappMessage = encodeURIComponent(
    "Hi, I found Periot Digital and I'd like to discuss a website.",
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <StageHeading
        number="01"
        title="WHAT ARE WE BUILDING?"
        description="Choose the option that best describes your project."
      />

      <div className={styles.choiceGrid}>
        <Choice
          label="NEW WEBSITE"
          subLabel="Starting from scratch"
          selected={value === "new"}
          onClick={() => onSelect("new")}
        />

        <Choice
          label="EXISTING WEBSITE"
          subLabel="Redesign or improvement"
          selected={value === "existing"}
          onClick={() => onSelect("existing")}
        />

        <Choice
          label="SOMETHING ELSE"
          subLabel="Tell me what you have in mind"
          selected={value === "something-else"}
          onClick={() => onSelect("something-else")}
        />
      </div>

      <div className={styles.whatsappContact}>
        <div className={styles.whatsappLine} />

        <div className={styles.whatsappContent}>
          <div>
            <span className={styles.whatsappLabel}>
              PREFER TO TALK DIRECTLY?
            </span>

            <p>Skip the form and start a conversation on WhatsApp.</p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <span className={styles.whatsappStatus} />
            OPEN WHATSAPP
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </>
  );
}

function PackageStage({
  value,
  onSelect,
  detectedPackage,
}: {
  value: PackageOption | "";
  onSelect: (value: PackageOption) => void;
  detectedPackage: string;
}) {
  return (
    <>
      <StageHeading
        number="02"
        title="CHOOSE A PACKAGE"
        description={
          detectedPackage
            ? `${detectedPackage.toUpperCase()} detected from your studio selection. You can keep it or choose another option.`
            : "Choose the package that feels closest to what you need."
        }
      />

      <div className={styles.packageChoices}>
        <Choice
          label="ESSENTIAL"
          subLabel="From £299"
          selected={value === "essential"}
          onClick={() => onSelect("essential")}
        />

        <Choice
          label="ENHANCED"
          subLabel="From £699"
          selected={value === "enhanced"}
          onClick={() => onSelect("enhanced")}
        />

        <Choice
          label="SIGNATURE"
          subLabel="From £1500"
          selected={value === "signature"}
          onClick={() => onSelect("signature")}
        />

        <Choice
          label="NOT SURE"
          subLabel="We'll work it out together"
          selected={value === "not-sure"}
          onClick={() => onSelect("not-sure")}
        />
      </div>
    </>
  );
}

function BriefStage({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
}) {
  return (
    <>
      <StageHeading
        number="03"
        title="TELL ME ABOUT IT"
        description="No need for a polished brief. Just give me enough to understand the idea."
      />

      <div className={styles.formStack}>
        <Field
          label="BUSINESS / PROJECT NAME"
          value={formData.businessName}
          onChange={(value) => updateField("businessName", value)}
          placeholder="Your business or project"
        />

        <TextArea
          label="WHAT DOES YOUR BUSINESS DO?"
          value={formData.businessDescription}
          onChange={(value) => updateField("businessDescription", value)}
          placeholder="Tell me a little about the business..."
        />

        <TextArea
          label="WHAT SHOULD THE WEBSITE ACHIEVE?"
          value={formData.projectGoal}
          onChange={(value) => updateField("projectGoal", value)}
          placeholder="More enquiries, sell products, showcase your work..."
        />
      </div>
    </>
  );
}

function DetailsStage({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
}) {
  return (
    <>
      <StageHeading
        number="04"
        title="ANYTHING I SHOULD KNOW?"
        description="Select anything relevant. None of these are required."
      />

      <div className={styles.toggleGrid}>
        <ToggleChoice
          label="I ALREADY HAVE A WEBSITE"
          selected={formData.existingWebsite}
          onClick={() =>
            updateField("existingWebsite", !formData.existingWebsite)
          }
        />

        <ToggleChoice
          label="I ALREADY HAVE BRANDING"
          selected={formData.existingBranding}
          onClick={() =>
            updateField("existingBranding", !formData.existingBranding)
          }
        />

        <ToggleChoice
          label="I NEED HELP WITH BRANDING"
          selected={formData.needsBranding}
          onClick={() => updateField("needsBranding", !formData.needsBranding)}
        />

        <ToggleChoice
          label="I'D LIKE TO DISCUSS INSTALMENTS"
          selected={formData.instalments}
          onClick={() => updateField("instalments", !formData.instalments)}
        />

        <ToggleChoice
          label="I'D LIKE TO ASK ABOUT A REDUCED RATE"
          selected={formData.reducedRate}
          onClick={() => updateField("reducedRate", !formData.reducedRate)}
        />
      </div>

      <p className={styles.supportNote}>
        Discounts may be available for charities and people facing exceptional
        circumstances. Flexible payment options may also be available.
      </p>
    </>
  );
}

function ContactStage({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
}) {
  return (
    <>
      <StageHeading
        number="05"
        title="WHERE SHOULD I REPLY?"
        description="Just the essentials."
      />

      <div className={styles.formStack}>
        <Field
          label="YOUR NAME"
          value={formData.name}
          onChange={(value) => updateField("name", value)}
          placeholder="Name"
        />

        <Field
          label="EMAIL"
          type="email"
          value={formData.email}
          onChange={(value) => updateField("email", value)}
          placeholder="you@example.com"
        />

        <Field
          label="PHONE / WHATSAPP"
          value={formData.phone}
          onChange={(value) => updateField("phone", value)}
          placeholder="Optional"
        />
      </div>
    </>
  );
}

function StageHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.stageHeading}>
      <span>{number}</span>

      <div>
        <h2>{title}</h2>

        <p>{description}</p>
      </div>
    </div>
  );
}

function Choice({
  label,
  subLabel,
  selected,
  onClick,
}: {
  label: string;
  subLabel: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.choice} ${selected ? styles.choiceSelected : ""}`}
    >
      <span>{label}</span>

      <small>{subLabel}</small>

      <div className={styles.choiceCorner} />
    </button>
  );
}

function ToggleChoice({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.toggleChoice} ${
        selected ? styles.toggleSelected : ""
      }`}
    >
      <span className={styles.toggleBox}>{selected ? "✓" : ""}</span>

      <span>{label}</span>
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className={styles.field}>
      <span>{label}</span>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className={styles.field}>
      <span>{label}</span>

      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function Progress({ currentStep }: { currentStep: number }) {
  return (
    <div className={styles.progress}>
      {stages.map((stage, index) => {
        const stageNumber = index + 1;

        return (
          <div key={stage} className={styles.progressItem}>
            <div
              className={`${styles.progressDot} ${
                stageNumber <= currentStep ? styles.progressActive : ""
              }`}
            />

            <span>{stage}</span>
          </div>
        );
      })}
    </div>
  );
}

function SpaceBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.stars} />

      <div className={styles.nebula} />

      <div className={styles.gridGlow} />

      <span className={`${styles.debris} ${styles.debrisOne}`}>
        SYSTEM / READY
      </span>

      <span className={`${styles.debris} ${styles.debrisTwo}`}>
        PROJECT / INPUT
      </span>

      <span className={`${styles.debris} ${styles.debrisThree}`}>
        CONNECTION / ACTIVE
      </span>
    </div>
  );
}

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
