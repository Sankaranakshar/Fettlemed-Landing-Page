export const preloadRoutes: Record<string, () => Promise<unknown>> = {
  '/': () => import('./pages/Home'),
  '/home': () => import('./pages/Home'),
  '/patient-app': () => import('./pages/PatientApp'),
  '/doctor-portal': () => import('./pages/DoctorPortal'),
  '/clinic-management': () => import('./pages/ClinicManagement'),
  '/about': () => import('./pages/About'),
  '/security': () => import('./pages/Security'),
};
