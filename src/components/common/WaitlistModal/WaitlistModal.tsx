import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
  defaultRole?: "Individual" | "Doctor" | "Clinic";
}

export function WaitlistModal({ open, onClose, defaultRole }: WaitlistModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onCancel={onClose}
      aria-labelledby="wl-modal-title"
      className="m-auto w-full max-w-[calc(100vw-1rem)] sm:max-w-lg rounded-[2rem] border border-stone-200 p-0 shadow-2xl backdrop:bg-pine-950/60 backdrop:backdrop-blur-sm open:animate-in open:fade-in open:slide-in-from-bottom-4 open:zoom-in-95 open:duration-200 open:ease-out"
    >
      <div className="relative max-h-[90vh] overflow-y-auto p-5 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 id="wl-modal-title" className="text-xl font-medium text-pine-900 tracking-tight">Join the Waitlist</h2>
            <p className="text-sm text-dim font-medium mt-1">Early access for select clinics, doctors, and individuals.</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-pine-50 hover:bg-pine-100 flex items-center justify-center transition-colors shrink-0 ml-4"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-dim" />
          </button>
        </div>
        <WaitlistForm onSuccess={onClose} defaultRole={defaultRole} />
      </div>
    </dialog>
  );
}
