import Link from "next/link";
import styles from "./Navbar.module.css";

const navigationLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/" className={styles.logo}>
          <span className={styles.logoName}>PERIOT</span>
          <span className={styles.logoStudio}>STUDIO</span>
        </Link>

        <div className={styles.links}>
          {navigationLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="#contact" className={styles.cta}>
          Start a project
          <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
