"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./ProjectViewer.module.css";

type ProjectViewerProps = {
  onClose: () => void;
};

export default function ProjectViewer({ onClose }: ProjectViewerProps) {
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

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.viewer}>
        <button type="button" onClick={onClose} className={styles.close}>
          CLOSE
        </button>

        <p className={styles.collection}>PERIOT DIGITAL</p>

        <div className={styles.packageHeader}>
          <div>
            <h2>ESSENTIAL</h2>

            <p className={styles.subtitle}>
              Everything you need to establish a professional online presence.
            </p>
          </div>

          <div className={styles.price}>
            <span>FROM</span>
            <strong>£299</strong>
          </div>
        </div>

        <div className={styles.preview}>
          <Image
            src="/images/sites/craftworkz.jpg"
            alt="Craftworkz website — Essential package example"
            width={1600}
            height={900}
            className={styles.previewImage}
          />

          <div className={styles.previewScanlines} aria-hidden="true" />
        </div>

        <div className={styles.exampleMeta}>
          <div>
            <span>LIVE EXAMPLE</span>
            <strong>CRAFTWORKZ</strong>
          </div>

          <div className={styles.exampleRight}>
            <span>BUILT FOR</span>
            <strong>Craftworkz Property Services</strong>
          </div>
        </div>

        <div className={styles.line} />

        <div className={styles.info}>
          <div>
            <h3>INCLUDED</h3>

            <p>✓ Fully bespoke design</p>
            <p>✓ Brand colours &amp; imagery</p>
            <p>✓ Responsive on all devices</p>
            <p>✓ Contact form</p>
            <p>✓ Hosting setup &amp; guidance</p>
            <p>✓ SEO foundations</p>
          </div>

          <div>
            <h3>IDEAL FOR</h3>

            <p>Local businesses</p>
            <p>Trades</p>
            <p>Startups</p>
            <p>Simple service websites</p>
            <p>Businesses focused on enquiries</p>
          </div>

          <div className={styles.care}>
            <h3>PERIOT CARE</h3>

            <div className={styles.carePrice}>
              <strong>£20</strong>
              <span>/ MONTH</span>
            </div>

            <p>Hosting management</p>
            <p>Small content updates</p>
            <p>New portfolio images added</p>
            <p>Technical maintenance</p>
            <p>Email support</p>
          </div>
        </div>

        <div className={styles.actions}>
          <a
            href="https://craftworkz.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryAction}
          >
            LAUNCH EXAMPLE ↗
          </a>

          <Link href="/pricing" className={styles.secondaryAction}>
            VIEW PACKAGE DETAILS →
          </Link>
        </div>

        <p className={styles.escapeHint}>ESC TO RETURN</p>
      </div>
    </div>
  );
}
