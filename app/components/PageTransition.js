"use client";

import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-transition-enter min-h-[50vh]">
      {children}
    </div>
  );
}
