export const ANALYTICS = {
  gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID || '',
  events: {
    hero_cta_click: 'hero_cta_click',
    demo_request: 'demo_request',
    waitlist_submit: 'waitlist_submit',
  },
} as const;

/** Google Forms destination for all waitlist submissions (modal, page, footer). */
export const WAITLIST_FORM = {
  url: "https://docs.google.com/forms/d/e/1FAIpQLSd_Gd_OmWQGHLY_gF_q3Xuj9kATD3cEXkjaym5pQFN7JyjSWw/formResponse",
  entries: {
    role:     "entry.1983186495",
    name:     "entry.177738397",
    email:    "entry.1945336821",
    phone:    "entry.764661147",
    context:  "entry.1761616143",
    comments: "entry.838799959",
  },
} as const;

export type WaitlistRole = "Patients & Caregivers" | "Doctor" | "Clinic";

/** Which waitlist role a page speaks to, by route. */
export function audienceRoleForPath(pathname: string): WaitlistRole | undefined {
  if (pathname.startsWith("/doctor-portal")) return "Doctor";
  if (pathname.startsWith("/clinic-management")) return "Clinic";
  if (pathname.startsWith("/patient-app")) return "Patients & Caregivers";
  return undefined;
}
