import Image from "next/image";
import Link from "next/link";

import styles from "./Experience.module.css";

const projects = [
  {
    title: "Craftworkz",
    url: "craftworkz.co.uk",
    image: "/images/sites/craftworkz.jpg",
    href: "#",
    colourClass: styles.blue,
    positionClass: styles.projectOne,
  },
  {
    title: "Periot Reworked",
    url: "periotreworked.co.uk",
    image: "/images/sites/reworked.jpg",
    href: "#",
    colourClass: styles.purple,
    positionClass: styles.projectTwo,
  },
  {
    title: "Periot Digital",
    url: "periotdigital.co.uk",
    image: "/images/sites/periot-digital.jpg",
    href: "/",
    colourClass: styles.pink,
    positionClass: styles.projectThree,
  },
  {
    title: "Concept Project",
    url: "concept-project.co.uk",
    image: "/images/sites/concept.jpg",
    href: "#",
    colourClass: styles.green,
    positionClass: styles.projectFour,
  },
];

export default function Experience() {
  return (
    <main className={styles.experience}>
      <div className={styles.particles} aria-hidden="true" />

      <Link href="/" className={styles.back}>
        <span aria-hidden="true">←</span>
        Exit
      </Link>

      <div className={styles.stage}>
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            aria-label={`View ${project.title}`}
            className={`${styles.project} ${project.positionClass}`}
          >
            <div className={`${styles.frame} ${project.colourClass}`}>
              <p className={styles.url}>
                <span aria-hidden="true">↗</span>
                {project.url}
              </p>

              <div className={styles.window}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={`${project.title} website preview`}
                    fill
                    sizes="(max-width: 800px) 75vw, 35vw"
                    className={styles.image}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className={styles.instruction}>Move through the work</p>
    </main>
  );
}
