"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import styles from "./Hero.module.css";

export default function Hero() {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement;

      // Don't trigger while typing in a form field
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (event.key === "Enter") {
        router.push("/enter");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

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

      <Link href="/enter" className={styles.scroll}>
        <span>Enter</span>
        <span className={styles.scrollLine} aria-hidden="true" />
      </Link>
    </section>
  );
}
