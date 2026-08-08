import { Suspense } from "react";

import ProjectInitialiser from "./ProjectInitialiser";

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactLoading />}>
      <ProjectInitialiser />
    </Suspense>
  );
}

function ContactLoading() {
  return (
    <main
      style={{
        minHeight: "100svh",
        background: "#000",
      }}
    />
  );
}