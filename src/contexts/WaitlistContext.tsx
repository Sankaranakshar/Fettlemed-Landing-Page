import React, { createContext, useContext, useState } from "react";
import { WaitlistModal } from "@/components/common/WaitlistModal";

type Role = "Individual" | "Doctor" | "Clinic";

interface WaitlistContextValue {
  openWaitlist: (role?: Role) => void;
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [defaultRole, setDefaultRole] = useState<Role | undefined>(undefined);

  const openWaitlist = (role?: Role) => {
    setDefaultRole(role);
    setOpen(true);
  };

  return (
    <WaitlistContext.Provider value={{ openWaitlist }}>
      <WaitlistModal open={open} onClose={() => setOpen(false)} defaultRole={defaultRole} />
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) throw new Error("useWaitlist must be used within WaitlistProvider");
  return ctx;
}
