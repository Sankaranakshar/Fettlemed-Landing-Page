import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/common/SEO";
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/FadeIn";
import { Home, Stethoscope, Search } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SEO title="404 - Not Found" description="The page you are looking for does not exist." />
      <div className="flex flex-col w-full min-h-[80vh] bg-surface-50 items-center justify-center p-6 text-center">
        <FadeIn>
          <div className="w-24 h-24 bg-pine-100 rounded-3xl flex items-center justify-center text-pine-600 mb-8 mx-auto shadow-sm">
            <Search className="w-12 h-12" />
          </div>
          <h1 className="text-6xl font-medium text-pine-900 mb-4 tracking-tighter">404</h1>
          <h2 className="text-2xl font-medium text-stone-800 mb-6 px-4">
            Oops! This page has gone off the grid.
          </h2>
          <p className="text-stone-500 max-w-md mx-auto mb-10 leading-relaxed font-medium">
            It seems we couldn't find the record you were looking for. 
            Don't worry, your own health records are safe!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-xl font-medium flex items-center gap-2">
                <Home className="w-5 h-5" /> Back to Home
              </Button>
            </Link>
            <Link to="/patient-app" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 rounded-xl border-stone-200 text-stone-600 hover:text-pine-900 font-medium flex items-center gap-2">
                <Stethoscope className="w-5 h-5" /> Patient Portal
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
