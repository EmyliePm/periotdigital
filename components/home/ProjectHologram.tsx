import Image from "next/image";

import styles from "./ProjectHologram.module.css";

type ProjectHologramProps = {
  onSelect: () => void;
  hidden?: boolean;
};

export default function ProjectHologram({
  onSelect,
  hidden = false,
}: ProjectHologramProps) {
  return (
    <button
      type="button"
      className={`${styles.projectButton} ${hidden ? styles.hidden : ""}`}
      onClick={onSelect}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
    >
      <div className={styles.position}>
        <div className={styles.hologram}>
          <div className={styles.meta}>
            <span>PACKAGE_01</span>
            <span className={styles.status}>AVAILABLE</span>
          </div>

          <div className={styles.titleRow}>
            <h2>ESSENTIAL</h2>
            <span>FROM £299</span>
          </div>

          <div className={styles.frame}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/sites/craftworkz.jpg"
                alt="Example of the Essential website package"
                width={1600}
                height={900}
                priority
                className={styles.image}
              />

              <div className={styles.scanlines} aria-hidden="true" />
              <div className={styles.scanner} aria-hidden="true" />
              <div className={styles.bootMask} aria-hidden="true" />
            </div>

            <span className={`${styles.corner} ${styles.topLeft}`} />
            <span className={`${styles.corner} ${styles.topRight}`} />
            <span className={`${styles.corner} ${styles.bottomLeft}`} />
            <span className={`${styles.corner} ${styles.bottomRight}`} />
          </div>

          <div className={styles.footer}>
            <span>EXAMPLE / CRAFTWORKZ</span>
            <span>↗ INSPECT</span>
          </div>
        </div>
      </div>
    </button>
  );
}
