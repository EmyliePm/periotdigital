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
  exampleStatus?: string;

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
    carePrice: "£25",

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
    price: "£599",
    carePrice: "£50",

    tagline:
      "A richer, more expressive website designed to help your business stand out. Example is a work in progress",

    exampleName: "Craftworkz Enhanced",
    exampleBusiness: "Craftworkz",
    exampleStatus: "CONCEPT BUILD · WORK IN PROGRESS",

    viewerImage: "/images/sites/enhanced.jpg",
    url: "https://craftworkzenhanced.netlify.app/",

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

      {/* Deep space */}
      <div className={styles.background} aria-hidden="true">
        <div className={styles.stars} />
        <div className={styles.brightStars} />
        <div className={styles.nebula} />
        <div className={styles.nebulaSecondary} />
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
        <section className={styles.packageIntro}>
          <div className={styles.packageIntroHeading}>
            <span className={styles.packageIntroLabel}>
              PERIOT / WEB DESIGN
            </span>


<h1>
  AFFORDABLE BESPOKE
  <br />
  WEB DESIGN
</h1>

          </div>
 
          <div className={styles.packageIntroCopy}>

<p>
  Affordable, modern websites for small businesses,
  startups and independent brands worldwide.
  Designed and developed by Periot Digital,
  an independent web design studio based in the UK.
</p>

<div className={styles.introActions}>
  <Link
    href="/contact"
    className={styles.secondaryAction}
  >
    MAKE AN ENQUIRY
  </Link>
<span>or</span>
  <span>SELECT A WEBSITE PACKAGE BELOW ↓</span>
</div>
          </div>
        </section>

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

<section
  className={styles.seoSection}
  aria-labelledby="why-periot"
>
  <div className={styles.seoHeading}>
    <span>THE PERIOT APPROACH</span>
    <h2 id="why-periot">
      BESPOKE WEB DESIGN.
      <br />
      WITHOUT THE PREMIUM PRICE TAG.
    </h2>
    <p>
      Professional websites should be accessible to businesses
      of all sizes. We combine thoughtful design, modern
      development and transparent pricing to create websites
      that work for your business.
    </p>
  </div>

  <div className={styles.seoGrid}>
    <article className={styles.seoCard}>
      <span>01 / DESIGN</span>
      <h3>Bespoke websites</h3>
      <p>
        Your business deserves more than a generic template.
        We create responsive websites tailored to your brand,
        services and customers.
      </p>
    </article>

    <article className={styles.seoCard}>
      <span>02 / PRICING</span>
      <h3>Affordable web design</h3>
      <p>
        Clear website packages starting from £299.
        Whether you're launching a new business or
        refreshing an existing website, we'll help you
        find the right solution.
      </p>
    </article>

    <article className={styles.seoCard}>
      <span>03 / WORLDWIDE</span>
      <h3>Web design without borders</h3>
      <p>
        Based in West Yorkshire, England, and working
        remotely with businesses worldwide. Great websites
        don't need geographical boundaries.
      </p>
    </article>
  </div>

  <Link href="/contact" className={styles.seoContact}>
    DISCUSS YOUR WEBSITE
    <span aria-hidden="true">↗</span>
  </Link>
</section>

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
