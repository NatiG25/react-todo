import { useEffect } from "react";

export const useOnClickOutside = (ref, currentState, updater) => {
  useEffect(() => {
    const handler = (e) => {
      if (currentState && ref.current && !ref.current.contains(e.target)) {
        updater();
      }
    };
    document.addEventListener("mousedown", handler);
    // Clean side effects
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [ref, currentState, updater]);
};
