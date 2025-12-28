'use client';
import { createContext, useContext, useState, useRef } from "react";

const PageTransitionContext = createContext(null);

export function PageTransitionProvider({ children }) {
  const [phase, setPhase] = useState('idle'); // idle | enter | exit
  const timeoutRef = useRef(null);

  const startTransition = (navigate) => {
    if (phase !== 'idle') return;

    // Start enter animation (slide in from top)
    setPhase('enter');

    // Wait for overlay to fully cover
    timeoutRef.current = setTimeout(() => {
      navigate(); // navigate while overlay is covering screen

      // Start exit animation (slide down)
      setPhase('exit');

      // Cleanup after exit
      timeoutRef.current = setTimeout(() => {
        setPhase('idle');
      }, 700); // match CSS duration
    }, 500); // wait before navigating (screen cover)
  };

  const getTransform = () => {
    switch (phase) {
      case 'idle':
        return 'translateY(-100%)';
      case 'enter':
        return 'translateY(0%)';
      case 'exit':
        return 'translateY(100%)';
      default:
        return 'translateY(-100%)';
    }
  };

  return (
    <PageTransitionContext.Provider value={{ startTransition }}>
      {children}

      {/* Only render overlay during enter/exit */}
      {phase !== 'idle' && (
        <div
          style={{ transform: getTransform() }}
          className="
            fixed inset-x-0 top-0 h-screen z-100 bg-black
            rounded-b-[50px]
            transition-transform duration-700 ease-in-out
            pointer-events-none
          "
        />
      )}
    </PageTransitionContext.Provider>
  );
}

export const usePageTransition = () => useContext(PageTransitionContext);
