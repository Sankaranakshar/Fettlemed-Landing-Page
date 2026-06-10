import React, { Suspense } from "react";

/**
 * Code-split wrappers for the animated product mockups.
 *
 * The mockups are the heaviest interactive components on the site
 * (~1,500 lines of timers and animation). Splitting them out of the
 * main bundle cuts the critical-path JS for first interaction; while
 * their chunk loads, a sized skeleton in the same design language
 * holds the layout (no CLS). During prerender (renderToString) the
 * skeleton is what gets baked into the static HTML, which is fine:
 * the mockups are decorative, aria-hidden simulations.
 */

const HomeFlowInner = React.lazy(() =>
  import("./HomeFlowMockup").then((m) => ({ default: m.HomeFlowMockup }))
);
const DoctorInner = React.lazy(() =>
  import("./DoctorConsultationMockup").then((m) => ({ default: m.DoctorConsultationMockup }))
);
const ClinicInner = React.lazy(() =>
  import("./ClinicShuffleMockup").then((m) => ({ default: m.ClinicShuffleMockup }))
);
const PatientInner = React.lazy(() =>
  import("./PatientMobileMockup").then((m) => ({ default: m.PatientMobileMockup }))
);

/** Window-chrome skeleton matching the desktop mockups */
function WindowSkeleton({ minH }: { minH: number }) {
  return (
    <div
      className="w-full max-w-full sm:max-w-[480px] md:max-w-[540px] mx-auto bg-white rounded-[1.5rem] border border-stone-200 shadow-xl overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 px-5 py-3 border-b border-stone-100 bg-stone-50">
        <span className="w-3 h-3 rounded-full bg-stone-200" />
        <span className="w-3 h-3 rounded-full bg-stone-200" />
        <span className="w-3 h-3 rounded-full bg-stone-200" />
      </div>
      <div className="p-5 space-y-3" style={{ minHeight: minH }}>
        {[60, 90, 75].map((w, i) => (
          <div key={i} className="h-9 rounded-xl bg-stone-100 motion-safe:animate-pulse" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

/** Phone-frame skeleton matching the patient mockup */
function PhoneSkeleton() {
  return (
    <div className="relative flex justify-center" aria-hidden="true">
      <div className="rounded-[3rem] overflow-hidden motion-safe:animate-pulse" style={{ width: 280, height: 574, backgroundColor: "#0a1f18" }} />
    </div>
  );
}

export function HomeFlowMockup() {
  return (
    <Suspense fallback={<WindowSkeleton minH={330} />}>
      <HomeFlowInner />
    </Suspense>
  );
}

export function DoctorConsultationMockup() {
  return (
    <Suspense fallback={<WindowSkeleton minH={300} />}>
      <DoctorInner />
    </Suspense>
  );
}

export function ClinicShuffleMockup() {
  return (
    <Suspense fallback={<WindowSkeleton minH={270} />}>
      <ClinicInner />
    </Suspense>
  );
}

interface PatientMobileMockupProps {
  activeTab?: "Home" | "Records" | "Share" | "Profile";
}

export function PatientMobileMockup(props: PatientMobileMockupProps) {
  return (
    <Suspense fallback={<PhoneSkeleton />}>
      <PatientInner {...props} />
    </Suspense>
  );
}
