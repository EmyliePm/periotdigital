import styles from "./Experience.module.css";
import Link from "next/link";


export default function Experience() {
  return (
    <main className={styles.experience}>
      {/* Deep space */}
      <div className={styles.background}>
        <div className={styles.stars} aria-hidden="true" />
        <div className={styles.nebula} aria-hidden="true" />
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
<Link href="/" className={styles.exit}>
  <span aria-hidden="true">◄</span>
  <span>EXIT</span>
</Link>

      {/* Workspace */}
      <section className={styles.workspace}>
        {/* Digital debris */}
        {/* Projects */}
        {/* Open Studio portal */}
      </section>
    </main>
  );
}