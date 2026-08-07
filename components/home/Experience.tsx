import Link from "next/link";

import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <main className={styles.experience}>
      {/* Exit */}
      <Link href="/" className={styles.exit}>
        <span aria-hidden="true">◄</span>
        <span>EXIT</span>
      </Link>

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

          <p className={styles.connected}>
            &gt; LINK ESTABLISHED
          </p>
        </div>
      </section>

      {/* Digital pulse */}
      <div className={styles.pulse} aria-hidden="true">
        <div className={styles.ring} />
      </div>

      {/* Workspace */}
      <section className={styles.workspace}>
        {/* Main debris layer */}
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

        {/* Far debris layer */}
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

        {/* Projects will go here next */}

        {/* OPEN STUDIO portal will go here later */}
      </section>
    </main>
  );
}