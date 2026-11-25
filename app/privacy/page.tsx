import type { Metadata } from "next";
import Link from "next/link";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy | Periot Digital",
  description:
    "How Periot Digital collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <Link href="/" className={styles.back}>
        ← Back to Periot Digital
      </Link>

      <h1>Privacy & Cookie Policy</h1>
      <p>Last updated: 25 November 2026</p>

      <h2>Who we are</h2>
      <p>
        Periot Digital is an independent web design and development business
        operated by Em Periot. We are responsible for the personal information
        collected through this website.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you contact us or submit an enquiry, we may collect your name,
        email address, optional telephone number, business details, project
        requirements and any other information you choose to provide.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>Responding to enquiries.</li>
        <li>Preparing quotations and proposals.</li>
        <li>Providing agreed web design services.</li>
        <li>Managing customer relationships.</li>
        <li>Improving our website and services.</li>
        <li>Meeting our legal obligations.</li>
      </ul>

      <h2>Legal basis for processing</h2>
      <p>
        We process customer enquiries and project information where necessary to
        take steps before entering into a contract or to fulfil an existing
        contract.
      </p>
      <p>
        We use spam prevention and security services based on our legitimate
        interest in protecting our website and enquiry system from abuse.
      </p>
      <p>
        We may also process information based on our legitimate business
        interests or to comply with legal obligations. Optional analytics are
        processed based on your consent.
      </p>

      <h2>Analytics and cookies</h2>
      <p>
        We use Google Analytics, with your permission, to understand how
        visitors use our website. This may include pages visited, approximate
        location, device information and referral sources.
      </p>
      <p>
        Analytics cookies, including _ga and _ga_*, are only enabled after you
        accept analytics. Your cookie preference is stored locally in your
        browser.
      </p>
      <p>
        You can withdraw or change your consent at any time using the Cookie
        settings button. Declining analytics does not affect your ability to use
        our website or contact us.
      </p>

      <h2>Sharing your information</h2>
      <p>
        We do not sell your personal information. Information may be processed
        by service providers that support our website hosting, email, analytics
        and business operations.
      </p>
      <p>
        We use Web3Forms to process and deliver website enquiries to our
        business email address. Information submitted through our enquiry form
        is processed by this service.
      </p>

      <p>
        We use hCaptcha to protect our enquiry form against spam and automated
        abuse. This service may process IP addresses, browser information and
        interaction data for security purposes. Further information is available
        in the{" "}
        <a
          href="https://www.hcaptcha.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          hCaptcha Privacy Policy
        </a>
        .
      </p>

      <p>
        If you choose to contact us through WhatsApp, your communications are
        also subject to WhatsApp's own privacy policy.
      </p>
      <p>
        Google processes analytics information when you consent to analytics.
        Further information is available in{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google's Privacy Policy
        </a>
        .
      </p>

      <h2>Data retention</h2>
      <p>
        We retain personal information only for as long as reasonably necessary
        for the purposes for which it was collected, including providing
        services and meeting legal, accounting and contractual obligations.
      </p>
      <p>
        Google Analytics user-level and event-level data is retained for two
        months. Aggregated statistical reports may be retained for longer.
      </p>
      <h2>International data transfers</h2>
      <p>
        Some service providers may process information outside the United
        Kingdom. Where applicable, international transfers must be protected by
        appropriate data protection safeguards.
      </p>

      <h2>Your rights</h2>
      <p>
        Under applicable data protection legislation, you may have the right to
        access, correct or erase your personal information, restrict or object
        to processing, request data portability and withdraw your consent.
      </p>
      <p>
        You also have the right to complain to the Information Commissioner's
        Office at{" "}
        <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>
        .
      </p>

      <h2>Contact us</h2>
      <p>
        For questions about this policy or to exercise your privacy rights,
        please contact us at{" "}
        <a href="mailto:emylieperiot@gmail.com">emylieperiot@gmail.com</a>.
      </p>
    </main>
  );
}
