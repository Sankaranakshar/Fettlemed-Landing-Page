import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { WaitlistModal } from "@/components/common/WaitlistModal";
import { cn } from "@/utils/cn";
import { Menu, X } from "lucide-react";
import { preloadRoutes } from "@/preloadRoutes";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "For Patients", path: "/patient-app" },
    { name: "For Doctors", path: "/doctor-portal" },
    { name: "For Clinics", path: "/clinic-management" },
    { name: "About", path: "/about" },
    { name: "Security", path: "/security" },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans bg-surface-50">
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full h-20 border-b border-stone-200/50 bg-surface-50/80 backdrop-blur-xl transition-[background-color,border-color] duration-150">
        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between max-w-none">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsMobileMenuOpen(false)} aria-label="Fettlemed Home">
            <img src="/brand/mark.svg" alt="" aria-hidden="true" className="w-9 h-9 shrink-0" />
            <span className="text-xl tracking-tight leading-none select-none">
              <span className="font-bold text-ink">Fettle</span><span className="font-bold text-pine-600">Med</span>
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onMouseEnter={() => preloadRoutes[link.path]?.()}
                className={({ isActive }) => cn(
                  "text-sm font-medium tracking-wide transition-colors duration-150 ease-out",
                  isActive ? "text-pine-600" : "text-dim hover:text-pine-600"
                )}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="h-5 w-[1px] bg-stone-200 mx-2" />
            <Button variant="animated" onClick={() => setWaitlistOpen(true)} className="bg-pine-900 hover:bg-pine-800 text-white rounded-lg shadow-sm text-sm h-10 px-6 font-medium transition-colors">
              Join Waitlist
            </Button>
          </nav>
 
          <button
            className="lg:hidden text-stone-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-surface-50 border-t border-stone-200 p-6 space-y-6 shadow-xl absolute w-full left-0 z-50">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => preloadRoutes[link.path]?.()}
                  className={({ isActive }) => cn(
                    "block text-xl font-medium tracking-wide py-5 px-4 -mx-4 rounded-xl transition-colors duration-150 ease-out active:bg-stone-100",
                    isActive ? "text-pine-600 bg-pine-50/50" : "text-stone-800"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-6 border-t border-stone-200 flex flex-col gap-4">
                <Button variant="animated" size="lg" onClick={() => { setIsMobileMenuOpen(false); setWaitlistOpen(true); }} className="w-full bg-pine-900 hover:bg-pine-800 text-white rounded-xl h-14 font-medium">Join Waitlist</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-1 flex flex-col min-h-[80vh]" tabIndex={-1}>{children}</main>

      {/* Global Footer  */}
      <footer className="w-full text-white mt-auto bg-pine-900 pt-20 pb-12">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16 border-b border-pine-800 pb-16">
             {/* Column 1: Product */}
             <nav className="flex flex-col gap-4" aria-label="Product Links">
                <h3 className="text-sm font-medium tracking-widest text-pine-400 uppercase mb-2">Product</h3>
                <Link to="/patient-app" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">For Everyone</Link>
                <Link to="/doctor-portal" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">For Doctors</Link>
                <Link to="/clinic-management" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">For Clinics</Link>
                <Link to="/security" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">Security</Link>
             </nav>

             {/* Column 2: Company */}
             <nav className="flex flex-col gap-4" aria-label="Company Links">
                <h3 className="text-sm font-medium tracking-widest text-pine-400 uppercase mb-2">Company</h3>
                <Link to="/about" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">About</Link>
                <Link to="/about#team" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">Team</Link>
                <Link to="/about#contact" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">Contact</Link>
             </nav>

             {/* Column 3: Legal */}
             <nav className="flex flex-col gap-4" aria-label="Legal Links">
                <h3 className="text-sm font-medium tracking-widest text-pine-400 uppercase mb-2">Legal</h3>
                <Link to="/privacy" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">Terms of Service</Link>
             </nav>

             {/* Column 4: Connect */}
             <nav className="flex flex-col gap-4" aria-label="Connect Links">
                <h3 className="text-sm font-medium tracking-widest text-pine-400 uppercase mb-2">Connect</h3>
                <a href="mailto:hello@fettlemed.com" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">hello@fettlemed.com</a>
                <a href="https://www.linkedin.com/company/fettlemed/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://x.com/FETTLEMEDHEALTH" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">X (Twitter)</a>
                <a href="https://www.instagram.com/fettlemed?igsh=dWs4bGQ4ZGVrNG9j&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-sm font-medium text-pine-200 hover:text-white transition-colors">Instagram</a>
             </nav>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-pine-200/60 text-xs font-medium">
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 64 64" className="w-8 h-8 shrink-0" aria-hidden="true">
                <g transform="rotate(-18 32 32)">
                  <path d="M32 4C18 8 10 18 10 32s8 24 22 28c14-4 22-14 22-28S46 8 32 4Z" fill="#F4F1EA"/>
                </g>
                <path d="M2 34h11l3-6 3 6 4-20 5 28 4-18 3 10h27" fill="none" stroke="#0B4A3A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-lg tracking-tight leading-none select-none">
                <span className="font-bold text-white">Fettle</span><span className="font-bold text-pine-200">Med</span>
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
    </div>
  );
}
