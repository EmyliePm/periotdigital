"use client";

import { useEffect } from "react";

import styles from "./ProjectViewer.module.css";

type ProjectViewerProps = {
  onClose: () => void;
};

export default function ProjectViewer({
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

  function handleOverlayClick(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
    >
      <div className={styles.viewer}>
        <button
          type="button"
          onClick={onClose}
          className={styles.close}
        >
          CLOSE
        </button>

        <p className={styles.label}>PROJECT_01</p>

        <h2>CRAFTWORKZ</h2>

        <p className={styles.subtitle}>
          Property Management Website
        </p>

        <div className={styles.line} />

        <div className={styles.info}>
          <div>
            <h3>STACK</h3>

            <p>Next.js</p>
            <p>React</p>
            <p>TypeScript</p>
            <p>CSS Modules</p>
          </div>

          <div>
            <h3>FEATURES</h3>

            <p>Responsive Design</p>
            <p>Lead Generation</p>
            <p>Image Uploads</p>
            <p>Netlify Deployment</p>
          </div>
        </div>

        <div className={styles.actions}>
          <a
            href="https://craftworkz.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            LAUNCH SITE ↗
          </a>

          <button type="button">
            BUILD NOTES
          </button>
        </div>

        <p className={styles.escapeHint}>
          ESC TO RETURN
        </p>
      </div>
    </div>
  );
}