import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.particles} aria-hidden="true" />
      <div className={styles.particlesSecondary} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Independent creative web studio</p>

        <h1 className={styles.heading}>
          <span>PERIOT</span>
          <span>DIGITAL</span>
        </h1>

        <p className={styles.tagline}>
          Not just websites.
          <span>Digital experiences.</span>
        </p>
      </div>

      <a href="#work" className={styles.scroll}>
        <span>Enter</span>
        <span className={styles.scrollLine} aria-hidden="true" />
      </a>
    </section>
  );
}
