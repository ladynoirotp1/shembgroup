"use client";

import { useEffect, useState } from "react";
import { AuthNav } from "@/components/AuthNav";

type MobileNavWrapperProps = { isOwnerSession: boolean };

export function MobileNavWrapper({ isOwnerSession }: MobileNavWrapperProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:block" aria-label="Main">
        <AuthNav isOwnerSession={isOwnerSession} />
      </nav>

      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none text-zinc-600 hover:bg-zinc-100 hover:text-brand-primary dark:text-foreground-muted dark:hover:bg-brand-light md:hidden"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile drawer overlay + panel */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white dark:bg-background shadow-xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-16 items-center justify-between border-b border-zinc-200 dark:border-border px-4">
              <span className="text-lg font-semibold text-zinc-900 dark:text-foreground">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-none text-zinc-600 hover:bg-zinc-100 hover:text-brand-primary dark:text-foreground-muted dark:hover:bg-brand-light"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="p-2" aria-label="Main">
              <AuthNav
                isOwnerSession={isOwnerSession}
                variant="mobile"
                onNavigate={() => setOpen(false)}
              />
            </nav>
          </div>
        </>
      )}
    </>
  );
}
