import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { cn } from "@/utils/cn";
import { Menu, X } from "lucide-react";
import { preloadRoutes } from "@/preloadRoutes";
import { useWaitlist } from "@/contexts/WaitlistContext";
import { audienceRoleForPath } from "@/config/constants";
import { CookieConsent } from "@/components/common/CookieConsent/CookieConsent";
import { FooterQuickJoin } from "@/components/common/Layout/FooterQuickJoin";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openWaitlist } = useWaitlist();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Hairline shadow once the page is scrolled, so the nav reads as a layer
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape closes the mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMobileMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileMenuOpen]);

  // The nav CTA pre-selects the role the current page speaks to
  const audienceRole = audienceRoleForPath(location.pathname);

  const navLinks = [
    { name: "For Patients", path: "/patient-app" },
    { name: "For Doctors", path: "/doctor-portal" },
    { name: "For Clinics", path: "/clinic-management" },
    { name: "About", path: "/about" },
    { name: "Security", path: "/security" },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans bg-surface-50">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Navbar */}
      <header className={cn(
        "sticky top-0 z-50 w-full h-20 border-b border-stone-200/50 bg-surface-50/80 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-150",
        scrolled && "shadow-[0_1px_12px_rgba(8,35,28,0.06)]"
      )}>
        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between max-w-none">
          <Link to="/" className="flex items-center h-full" onClick={() => setIsMobileMenuOpen(false)} aria-label="FettleMed Home">
            <span className="text-xl tracking-tight leading-none select-none">
              <span className="font-bold text-ink">Fettle</span><span className="font-bold text-pine-600">Med</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onMouseEnter={() => preloadRoutes[link.path]?.()}
                className={({ isActive }) => cn(
                  "text-sm font-medium tracking-wide transition-colors duration-150 ease-out whitespace-nowrap",
                  isActive ? "text-pine-600" : "text-dim hover:text-pine-600"
                )}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="h-5 w-[1px] bg-pine-100 mx-1 lg:mx-2" />
            <Button variant="animated" onClick={() => openWaitlist(audienceRole)} className="bg-pine-900 hover:bg-pine-800 text-white rounded-lg shadow-sm text-xs lg:text-sm h-9 lg:h-10 px-4 lg:px-6 font-medium transition-colors">
              Join Waitlist
            </Button>
          </nav>

          <button
            className="md:hidden text-ink p-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface-50 border-t border-stone-200 p-6 space-y-6 shadow-xl absolute w-full left-0 z-50">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onMouseEnter={() => preloadRoutes[link.path]?.()}
                  className={({ isActive }) => cn(
                    "block text-xl font-medium tracking-wide py-5 px-4 -mx-4 rounded-xl transition-colors duration-150 ease-out active:bg-pine-50",
                    isActive ? "text-pine-600 bg-pine-50/50" : "text-ink"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-6 border-t border-stone-200 flex flex-col gap-4">
                <Button variant="animated" size="lg" onClick={() => { setIsMobileMenuOpen(false); openWaitlist(audienceRole); }} className="w-full bg-pine-900 hover:bg-pine-800 text-white rounded-xl h-14 font-medium">Join Waitlist</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-1 flex flex-col min-h-[80vh]" tabIndex={-1}>{children}</main>

      {/* Global Footer  */}
      <footer className="w-full text-white mt-auto bg-pine-900 pt-14 pb-10">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

          {/* Quick capture: email only, for visitors not ready for the full form */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-pine-800 pb-10 mb-12">
            <div>
              <p className="text-white font-medium text-lg tracking-tight">Not ready for the form?</p>
              <p className="text-pine-300 text-sm mt-1">Leave your email and we'll reach out when your spot opens.</p>
            </div>
            <FooterQuickJoin />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-pine-800 pb-12">
             {/* Column 1: Product */}
             <nav className="flex flex-col gap-4" aria-label="Product Links">
                <h3 className="text-sm font-medium tracking-widest text-pine-300 uppercase mb-2">Product</h3>
                <Link to="/patient-app" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">For Patients</Link>
                <Link to="/doctor-portal" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">For Doctors</Link>
                <Link to="/clinic-management" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">For Clinics</Link>
                <Link to="/security" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">Security</Link>
             </nav>

             {/* Column 2: Company */}
             <nav className="flex flex-col gap-4" aria-label="Company Links">
                <h3 className="text-sm font-medium tracking-widest text-pine-300 uppercase mb-2">Company</h3>
                <Link to="/about" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">About</Link>
                <Link to="/about#team" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">Team</Link>
                <Link to="/about#contact" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">Contact</Link>
                <Link to="/waitlist" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">Join the Waitlist</Link>
             </nav>

             {/* Column 3: Legal */}
             <nav className="flex flex-col gap-4" aria-label="Legal Links">
                <h3 className="text-sm font-medium tracking-widest text-pine-300 uppercase mb-2">Legal</h3>
                <Link to="/privacy-policy" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms-of-service" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">Terms of Service</Link>
             </nav>

             {/* Column 4: Connect */}
             <nav className="flex flex-col gap-4" aria-label="Connect Links">
                <h3 className="text-sm font-medium tracking-widest text-pine-300 uppercase mb-2">Connect</h3>
                <a href="mailto:hello@fettlemed.com" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">hello@fettlemed.com</a>
                <a href="https://www.linkedin.com/company/fettlemed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://x.com/FETTLEMEDHEALTH" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">X (Twitter)</a>
                <a href="https://www.instagram.com/fettlemed" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">Instagram</a>
             </nav>
          </div>

          {/* Medical disclaimer - visible, not buried in ToS */}
          <div className="border-t border-pine-800 pt-6 mb-8 text-center">
            <p className="text-pine-300 text-xs leading-relaxed max-w-3xl mx-auto">
              FettleMed is a health record management platform. It is <strong className="text-pine-300">not a substitute</strong> for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical decisions.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-pine-200/60 text-xs font-medium">
            <div className="flex items-center">
              <span className="text-lg tracking-tight leading-none select-none">
                <span className="font-bold text-white">Fettle</span><span className="font-bold text-pine-400">Med</span>
              </span>
            </div>

            <div className="text-center md:text-right flex flex-col gap-2">
               <p>© 2026 NamNalam Health Tech Private Limited. All rights reserved.</p>
               <p>CIN: U62013TN2026PTC191755</p>
               <p>INNOV8 SKCL Tech Square, Guindy, Chennai – 600032, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
}
