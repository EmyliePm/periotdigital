import Image from "next/image";

import styles from "./ProjectHologram.module.css";

type ProjectHologramProps = {
  onSelect: () => void;
};

export default function ProjectHologram({
  onSelect,
}: ProjectHologramProps) {
  return (
    <button
      type="button"
      className={styles.projectButton}
      onClick={onSelect}
    >
      <div className={styles.position}>
        <div className={styles.hologram}>
          <div className={styles.meta}>
            <span>PROJECT_01</span>
            <span className={styles.status}>ONLINE</span>
          </div>

          <div className={styles.titleRow}>
            <h2>CRAFTWORKZ</h2>
            <span>PROPERTY SERVICES</span>
          </div>

          <div className={styles.frame}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/sites/craftworkz.jpg"
                alt="Craftworkz website"
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
            <span>craftworkz.co.uk</span>
            <span>↗ INSPECT</span>
          </div>
        </div>
      </div>
    </button>
  );
}