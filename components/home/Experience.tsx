"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import ProjectHologram from "./ProjectHologram";
import ProjectViewer from "./ProjectViewer";
import styles from "./Experience.module.css";

export type PackageData = {
  id: string;
  name: string;
  price: string;
  carePrice: string;
  tagline: string;

  exampleName: string;
  exampleBusiness: string;

  viewerImage?: string;
  url?: string;

  included: string[];
  idealFor: string[];

  available: boolean;
};

const packageData = {
  essential: {
    id: "01",
    name: "ESSENTIAL",
    price: "£299",
    carePrice: "£20",

    tagline: "Everything you need to establish a professional online presence.",

    exampleName: "CRAFTWORKZ",
    exampleBusiness: "Craftworkz Property Services",

    viewerImage: "/images/sites/craftworkz.jpg",
    url: "https://craftworkz.co.uk",

    included: [
      "Fully bespoke design",
      "Brand colours & imagery",
      "Responsive on all devices",
      "Contact form",
      "Hosting setup & guidance",
      "SEO foundations",
    ],

    idealFor: [
      "Local businesses",
      "Trades",
      "Startups",
      "Simple service websites",
      "Businesses focused on enquiries",
    ],

    available: true,
  },

  enhanced: {
    id: "02",
    name: "ENHANCED",
    price: "£699",
    carePrice: "£35",

    tagline:
      "A richer, more expressive website designed to help your business stand out.",

    exampleName: "PERIOT REWORKED",
    exampleBusiness: "Periot Reworked",

    viewerImage: "/images/sites/reworked.jpg",
    url: "#",

    included: [
      "Everything in Essential",
      "Expanded bespoke design",
      "Enhanced animations",
      "Additional pages",
      "Portfolio or gallery sections",
      "Testimonials & FAQs",
      "Analytics setup",
      "Enhanced SEO foundations",
    ],

    idealFor: [
      "Established businesses",
      "Creative businesses",
      "Growing brands",
      "Portfolio-led businesses",
      "Businesses wanting a stronger identity",
    ],

    available: true,
  },

  signature: {
    id: "03",
    name: "SIGNATURE",
    price: "£1500",
    carePrice: "CUSTOM",

    tagline:
      "Flagship digital experiences designed entirely around your business.",

    exampleName: "PERIOT DIGITAL",
    exampleBusiness: "Periot Digital",

    included: [
      "Everything in Enhanced",
      "Completely tailored experience",
      "Advanced interactions",
      "Custom functionality",
      "Integrations",
      "UX strategy",
      "Advanced animations",
      "Bespoke development",
    ],

    idealFor: [
      "Established brands",
      "Ambitious businesses",
      "Digital-first companies",
      "Businesses needing custom functionality",
      "Brands wanting something unforgettable",
    ],

    available: false,
  },
} satisfies Record<string, PackageData>;

type PackageKey = keyof typeof packageData;

export default function Experience() {
  const [selectedPackage, setSelectedPackage] = useState<PackageKey | null>(
    null,
  );

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      document.documentElement.style.setProperty("--mouse-x", x.toString());

      document.documentElement.style.setProperty("--mouse-y", y.toString());
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className={styles.experience}>
      {/* Exit */}
      {!selectedPackage && (
        <Link href="/" className={styles.exit}>
          <span aria-hidden="true">◄</span>
          <span>EXIT</span>
        </Link>
      )}

      {/* Deep space */}
      <div className={styles.background} aria-hidden="true">
        <div className={styles.stars} />
        <div className={styles.brightStars} />
        <div className={styles.nebula} />
        <div className={styles.nebulaSecondary} />
      </div>

      {/* Boot sequence */}
      <section className={styles.boot}>
        <div className={styles.bootMessages}>
          <p className={styles.bootText}>
            INITIALISING
            <span className={styles.loading}>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </p>

          <p className={styles.bootText}>
            SYNCHRONISING ASSETS
            <span className={styles.loading}>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </p>

          <p className={styles.connected}>&gt; LINK ESTABLISHED</p>
        </div>
      </section>

      {/* Digital pulse */}
      <div className={styles.pulse} aria-hidden="true">
        <div className={styles.ring} />
      </div>

      {/* Workspace */}
      <section className={styles.workspace}>
        {/* Main debris */}
        <div className={styles.debris} aria-hidden="true">
          <span className={`${styles.fragment} ${styles.fragmentOne}`}>
            {"<Button />"}
          </span>

          <span className={`${styles.fragment} ${styles.fragmentTwo}`}>
            #7C5CFF
          </span>

          <span className={`${styles.fragment} ${styles.fragmentThree}`}>
            display: grid;
          </span>

          <span className={`${styles.fragment} ${styles.fragmentFour}`}>
            {"const hero = {}"}
          </span>

          <span className={`${styles.fragment} ${styles.fragmentFive}`}>
            12 COL GRID
          </span>

          <span className={`${styles.fragment} ${styles.fragmentSix}`}>
            RGB / 91 255 182
          </span>

          <span className={`${styles.fragment} ${styles.fragmentSeven}`}>
            {"<section />"}
          </span>

          <span className={`${styles.fragment} ${styles.fragmentEight}`}>
            UI / SYSTEM READY
          </span>

          <div className={`${styles.shape} ${styles.shapeOne}`} />
          <div className={`${styles.shape} ${styles.shapeTwo}`} />
          <div className={`${styles.shape} ${styles.shapeThree}`} />
        </div>

        {/* Far debris */}
        <div className={styles.debrisFar} aria-hidden="true">
          <span className={styles.farOne}>READY</span>
          <span className={styles.farTwo}>DEPTH / 04</span>
          <span className={styles.farThree}>X: 182 Y: 904</span>
          <span className={styles.farFour}>NEXT / ACTIVE</span>
          <span className={styles.farFive}>SVG</span>

          <div className={styles.crossOne}>+</div>
          <div className={styles.crossTwo}>+</div>
          <div className={styles.circleOne} />
          <div className={styles.cornerOne}>⌜</div>
        </div>
        <div className={styles.packageGrid}>
          <ProjectHologram
            packageData={packageData.essential}
            variant="essential"
            onSelect={() => setSelectedPackage("essential")}
            hidden={selectedPackage !== null}
          />

          <ProjectHologram
            packageData={packageData.enhanced}
            variant="enhanced"
            onSelect={() => setSelectedPackage("enhanced")}
            hidden={selectedPackage !== null}
          />

          <ProjectHologram
            packageData={packageData.signature}
            variant="signature"
            onSelect={() => {}}
            hidden={selectedPackage !== null}
          />
        </div>
      </section>

      {/* Package viewer */}
      {selectedPackage && (
        <ProjectViewer
          key={selectedPackage}
          packageData={packageData[selectedPackage]}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </main>
  );
}
