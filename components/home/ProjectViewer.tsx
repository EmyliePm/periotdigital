"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import type { PackageData } from "./Experience";
import styles from "./ProjectViewer.module.css";

type ProjectViewerProps = {
  packageData: PackageData;
  onClose: () => void;
};

export default function ProjectViewer({
  packageData,
  onClose,
}: ProjectViewerProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  if (!packageData.viewerImage) {
    return null;
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.viewer}>
        <button type="button" onClick={onClose} className={styles.close}>
          CLOSE
        </button>

        <p className={styles.collection}>PERIOT DIGITAL</p>

        <div className={styles.packageHeader}>
          <div>
            <h2>{packageData.name}</h2>

            <p className={styles.subtitle}>{packageData.tagline}</p>
          </div>

          <div className={styles.price}>
            <span>FROM</span>

            <strong>{packageData.price}</strong>
          </div>
        </div>

        <div className={styles.preview}>
          <Image
            src={packageData.viewerImage}
            alt={`${packageData.exampleName} — ${packageData.name} package example`}
            width={1600}
            height={900}
            className={styles.previewImage}
          />

          <div className={styles.previewScanlines} aria-hidden="true" />
        </div>

        <div className={styles.exampleMeta}>
          <div>
            <span>{packageData.exampleStatus ?? "LIVE EXAMPLE"}</span>

            <strong>{packageData.exampleName}</strong>
          </div>

          <div className={styles.exampleRight}>
            <span>BUILT FOR</span>

            <strong>{packageData.exampleBusiness}</strong>
          </div>
        </div>

        <div className={styles.line} />

        <div className={styles.info}>
          <div>
            <h3>INCLUDED</h3>

            {packageData.included.map((item) => (
              <p key={item}>✓ {item}</p>
            ))}
          </div>

          <div>
            <h3>IDEAL FOR</h3>

            {packageData.idealFor.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div className={styles.care}>
            <h3>PERIOT CARE</h3>

            <div className={styles.carePrice}>
              <strong>{packageData.carePrice}</strong>

              <span>/ MONTH</span>
            </div>

            <p>Hosting management</p>
            <p>Small content updates</p>
            <p>New portfolio images added</p>
            <p>Technical maintenance</p>
            <p>Email support</p>
          </div>
        </div>

        <div className={styles.flexibilityNote}>
          <p>Flexible options available.</p>

          <span>
            Discounts may be available for charities and people facing
            exceptional circumstances, including single parents starting a
            business. We may also offer finance options such as 3 monthly
            instalments. Enquire to discuss what works for you.
          </span>
        </div>

        <div className={styles.actions}>
          {packageData.url && packageData.url !== "#" && (
            <a
              href={packageData.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryAction}
            >
              LAUNCH EXAMPLE ↗
            </a>
          )}

          <Link
            href={`/contact?package=${packageData.name.toLowerCase()}`}
            className={styles.secondaryAction}
          >
            MAKE AN ENQUIRY →
          </Link>
        </div>

        <p className={styles.escapeHint}>ESC TO RETURN</p>
      </div>
    </div>
  );
}
