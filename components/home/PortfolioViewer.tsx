"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PortfolioViewer.module.css";

type PortfolioViewerProps = {
  onClose: () => void;
};

type Project = {
  id: string;
  name: string;
  category: string;
  status: string;
  description: string;
  image: string | null;
  url: string | null;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: "craftworkz",
    name: "Craftworkz",
    category: "Web Design",
    status: "LIVE",
    description:
      "A bespoke, responsive website for a property maintenance and services business, designed to establish a professional online presence and generate customer enquiries.",
    image: "/images/sites/craftworkz.jpg",
    url: "https://craftworkz.co.uk",
    technologies: ["Next.js", "React", "Responsive Design", "SEO"],
  },
  {
    id: "british-pub",
    name: "British Pub",
    category: "Game Development",
    status: "COMING SOON",
    description:
      "An independent pub management simulation combining interactive cooking, customer service, interior customisation and an explorable 3D environment.",
    image: "/images/projects/prep1.jpg",
    url: "https://britishpubgame.com",
    technologies: ["React", "Three.js", "TypeScript", "Electron"],
  },
  {
    id: "prepare",
    name: "Prepare",
    category: "Web Application",
    status: "Pre-Launch",
    description:
      "A household emergency preparedness application designed to help individuals and families assess their readiness, calculate essential supplies and create personalised emergency checklists.",
    image: "/images/projects/prepare.jpg",
    url: "https://prepare-household-demo.netlify.app/",
    technologies: ["Next.js", "React", "TypeScript", "Application Development"],
  },
];

export default function PortfolioViewer({ onClose }: PortfolioViewerProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (selectedProject) {
          setSelectedProject(null);
        } else {
          onClose();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, selectedProject]);

  return (
    <div
      className={styles.overlay}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={styles.viewer}
        role="dialog"
        aria-modal="true"
        aria-label="Periot Digital portfolio"
      >
        <header className={styles.header}>
          <span>PERIOT DIGITAL / PORTFOLIO</span>

          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            autoFocus
          >
            CLOSE ×
          </button>
        </header>

        {!selectedProject ? (
          <>
            <div className={styles.intro}>
              <h2>PROJECTS</h2>
              <p>Explore our digital creations.</p>
            </div>

            <div className={styles.grid}>
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  className={styles.card}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={styles.thumbnail}>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        sizes="(max-width: 600px) 100vw, 400px"
                        className={styles.image}
                      />
                    ) : (
                      <div className={styles.placeholder}>
                        <span className={styles.symbol}>◇</span>
                        <span>COMING SOON</span>
                      </div>
                    )}

                    <span className={styles.status}>{project.status}</span>
                  </div>

                  <div className={styles.cardContent}>
                    <span className={styles.category}>{project.category}</span>

                    <h3>{project.name}</h3>

                    <span className={styles.inspect}>VIEW PROJECT ↗</span>
                  </div>
                </button>
              ))}

              <Link
                href="/contact"
                className={`${styles.card} ${styles.enquiryCard}`}
              >
                <div className={styles.thumbnail}>
                  <div className={styles.placeholder}>
                    <span className={styles.symbol}>+</span>
                    <span>YOUR NEXT PROJECT?</span>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.category}>Bespoke Development</span>

                  <h3>Let's build something.</h3>

                  <span className={styles.inspect}>MAKE AN ENQUIRY ↗</span>
                </div>
              </Link>
            </div>

            <footer className={styles.footer}>
              WEBSITES / APPLICATIONS / INTERACTIVE EXPERIENCES
            </footer>
          </>
        ) : (
          <div className={styles.detail}>
            <button
              type="button"
              className={styles.back}
              onClick={() => setSelectedProject(null)}
            >
              ← BACK TO PROJECTS
            </button>

            <div className={styles.detailHeader}>
              <div>
                <span className={styles.category}>
                  {selectedProject.category}
                </span>

                <h2>{selectedProject.name}</h2>
              </div>

              <span className={styles.detailStatus}>
                {selectedProject.status}
              </span>
            </div>

            <div className={styles.detailImage}>
              {selectedProject.image ? (
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.name} preview`}
                  fill
                  sizes="(max-width: 1000px) 100vw, 1000px"
                  className={styles.image}
                />
              ) : (
                <div className={styles.placeholder}>
                  <span className={styles.symbol}>◇</span>
                  <span>PROJECT IN DEVELOPMENT</span>
                </div>
              )}
            </div>

            <p className={styles.description}>{selectedProject.description}</p>

            <div className={styles.technologies}>
              {selectedProject.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            {selectedProject.url && (
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.launch}
              >
                LAUNCH PROJECT ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
