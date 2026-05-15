export const preloadRoutes: Record<string, () => Promise<unknown>> = {
  // Home is eagerly imported in AnimatedRoutes — no preload needed
  '/patient-app': () => import('./pages/PatientApp'),
  '/doctor-portal': () => import('./pages/DoctorPortal'),
  '/clinic-management': () => import('./pages/ClinicManagement'),
  '/about': () => import('./pages/About'),
  '/security': () => import('./pages/Security'),
};
