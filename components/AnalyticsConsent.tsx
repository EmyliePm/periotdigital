"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import styles from "./AnalyticsConsent.module.css";

type Consent = "accepted" | "declined" | null;
function clearAnalyticsCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();

    if (name === "_ga" || name.startsWith("_ga_")) {
      document.cookie = `${name}=; Max-Age=0; path=/`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.periotdigital.co.uk`;
    }
  });
}
export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("periot-digital-analytics");

    if (saved === "accepted" || saved === "declined") {
      setConsent(saved);
    }

    if (saved !== "accepted") {
      clearAnalyticsCookies();
    }

    setReady(true);
  }, []);

  function saveConsent(choice: "accepted" | "declined") {
    localStorage.setItem("periot-digital-analytics", choice);
    setConsent(choice);
    setShowSettings(false);

    if (choice === "declined") {
      clearAnalyticsCookies();
      window.location.reload();
    }
  }

  if (!ready) return null;

  const isProduction =
    window.location.hostname === "periotdigital.co.uk" ||
    window.location.hostname === "www.periotdigital.co.uk";

  return (
    <>
      {consent === "accepted" && isProduction && (
        <GoogleAnalytics gaId="G-V118L4LK6F" />
      )}

      {(consent === null || showSettings) && (
        <div
          className={styles.banner}
          role="region"
          aria-label="Analytics cookie preferences"
        >
          <h3>Cookie preferences</h3>

          <p>
            We use optional analytics cookies to understand how visitors use our
            website and improve our services. You can decline these cookies and
            continue browsing normally.
          </p>

          <a href="/privacy" className={styles.privacyLink}>
            Privacy & Cookie Policy
          </a>

          <div className={styles.buttons}>
            <button
              className={styles.choice}
              onClick={() => saveConsent("accepted")}
            >
              Accept analytics
            </button>

            <button
              className={styles.choice}
              onClick={() => saveConsent("declined")}
            >
              Decline analytics
            </button>
          </div>
        </div>
      )}

      {consent !== null && !showSettings && (
        <div className={styles.settingsBar}>
          <button
            className={styles.settings}
            onClick={() => setShowSettings(true)}
          >
            Cookie settings
          </button>

          <a href="/privacy" className={styles.settings}>
            Privacy & Cookies
          </a>
        </div>
      )}
    </>
  );
}
