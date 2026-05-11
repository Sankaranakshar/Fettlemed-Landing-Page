import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/utils/cn";

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-xs md:text-sm font-bold uppercase tracking-widest">
        <li>
          <Link
            to="/"
            className="text-stone-400 hover:text-pine-600 transition-colors flex items-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const label = value.replace(/-/g, " ");

          return (
            <li key={to} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
              {last ? (
                <span className="text-pine-900 truncate max-w-[150px] md:max-w-none">
                  {label}
                </span>
              ) : (
                <Link
                  to={to}
                  className="text-stone-400 hover:text-pine-600 transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
