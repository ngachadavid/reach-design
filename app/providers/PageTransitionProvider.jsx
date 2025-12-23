'use client';

import { createContext, useContext, useState } from "react";

const PageTransitionContext = createContext(null);

export function PageTransitionProvider({ children }) {
  const [isActive, setIsActive] = useState(false);

  const startTransition = (navigate) => {
    setIsActive(true);

    // wait for overlay to cover screen
    setTimeout(() => {
      navigate();       
    }, 400);

    // hide overlay after page change
    setTimeout(() => {
      setIsActive(false);
    }, 900);
  };

  return (
    <PageTransitionContext.Provider value={{ startTransition }}>
      {children}

      {/* Black overlay */}
      <div
        className={`
          fixed inset-0 z-9999 bg-black
          transition-transform duration-700 ease-in-out
          ${isActive ? "translate-y-0" : "-translate-y-full"}
        `}
      />
    </PageTransitionContext.Provider>
  );
}

export const usePageTransition = () => useContext(PageTransitionContext);
