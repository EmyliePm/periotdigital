import type { PackageData } from "./Experience";
import styles from "./ProjectHologram.module.css";

type ProjectHologramProps = {
  packageData: PackageData;
  variant: "essential" | "enhanced" | "signature";
  onSelect: () => void;
  hidden?: boolean;
};

export default function ProjectHologram({
  packageData,
  variant,
  onSelect,
  hidden = false,
}: ProjectHologramProps) {
  const isLocked = !packageData.available;

  const positionClass = {
    essential: styles.essentialPosition,
    enhanced: styles.enhancedPosition,
    signature: styles.signaturePosition,
  }[variant];

  const themeClass = {
    essential: styles.essentialTheme,
    enhanced: styles.enhancedTheme,
    signature: styles.signatureTheme,
  }[variant];

  return (
    <button
      type="button"
      onClick={isLocked ? undefined : onSelect}
      disabled={isLocked}
      aria-hidden={hidden}
      tabIndex={hidden || isLocked ? -1 : 0}
      className={`${styles.projectButton} ${
        hidden ? styles.hidden : ""
      } ${isLocked ? styles.lockedButton : ""}`}
    >
      <div className={`${styles.position} ${positionClass}`}>
        <div className={`${styles.hologram} ${themeClass}`}>
          <div className={styles.meta}>
            <span>PACKAGE_{packageData.id}</span>

            <span
              className={`${styles.status} ${
                isLocked ? styles.statusLocked : ""
              }`}
            >
              {isLocked ? "IN DEVELOPMENT" : "AVAILABLE"}
            </span>
          </div>

          <div className={styles.titleRow}>
            <h2>{packageData.name}</h2>

            <span>FROM {packageData.price}</span>
          </div>

          <div className={styles.frame}>
            {/* ESSENTIAL */}
            {variant === "essential" && (
              <div className={styles.essentialArtefact}>
                <div className={styles.essentialGrid} />

                <div className={styles.browser}>
                  <div className={styles.browserTop}>
                    <div className={styles.browserDots}>
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className={styles.browserAddress} />
                  </div>

                  <div className={styles.browserContent}>
                    <div className={styles.heroWireframe}>
                      <div className={styles.heroImageBox} />

                      <div className={styles.heroCopy}>
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>

                    <div className={styles.cardRow}>
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>

                <div className={styles.structure}>
                  <div className={styles.structureTop} />

                  <div className={styles.structureStem} />

                  <div className={styles.structureNodes}>
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}

            {/* ENHANCED */}
            {variant === "enhanced" && (
              <div className={styles.enhancedArtefact}>
                <div className={`${styles.interfacePanel} ${styles.panelOne}`}>
                  <span />
                  <span />
                  <span />
                </div>

                <div className={`${styles.interfacePanel} ${styles.panelTwo}`}>
                  <div className={styles.panelImage} />

                  <span />
                  <span />
                </div>

                <div
                  className={`${styles.interfacePanel} ${styles.panelThree}`}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className={`${styles.interfacePanel} ${styles.panelFour}`}>
                  <div className={styles.chartLine} />
                </div>

                <div className={styles.enhancedGlow} />
              </div>
            )}

            {/* SIGNATURE */}
            {variant === "signature" && (
              <div className={styles.signatureArtefact}>
                <div className={styles.orbitRingOne} />
                <div className={styles.orbitRingTwo} />
                <div className={styles.orbitRingThree} />

                <div className={styles.orbitNodeOne} />
                <div className={styles.orbitNodeTwo} />
                <div className={styles.orbitNodeThree} />
                <div className={styles.orbitNodeFour} />

                <div className={styles.signatureCore}>
                  <div className={styles.signatureCoreInner} />
                </div>

                <div className={styles.signatureText}>
                  <span>SIGNATURE BUILD</span>

                  <strong>PREVIEW LOCKED</strong>

                  <small>
                    FLAGSHIP EXPERIENCE
                    <br />
                    IN DEVELOPMENT
                  </small>
                </div>
              </div>
            )}

            <div className={styles.scanlines} aria-hidden="true" />
            <div className={styles.scanner} aria-hidden="true" />
            <div className={styles.bootMask} aria-hidden="true" />

            <span className={`${styles.corner} ${styles.topLeft}`} />
            <span className={`${styles.corner} ${styles.topRight}`} />
            <span className={`${styles.corner} ${styles.bottomLeft}`} />
            <span className={`${styles.corner} ${styles.bottomRight}`} />
          </div>

          <div className={styles.footer}>
            <span>
              {variant === "essential" && "SYSTEM / STRUCTURE"}
              {variant === "enhanced" && "SYSTEM / INTERFACE"}
              {variant === "signature" && "SYSTEM / SIGNATURE"}
            </span>

            <span>{isLocked ? "PREVIEW LOCKED" : "↗ INSPECT"}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
