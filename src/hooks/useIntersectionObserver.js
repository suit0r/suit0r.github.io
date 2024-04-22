import { useMemo } from "react";

const root = document.getElementById("#root");

// TODO: ultra early/sloppy implementation
export const useIntersectionObserver = (callback) => {
  return useMemo(() => {
    const options = {
      root,
      threshold: 0.9,
      trackVisibility: true,
      delay: 222,
    };

    const observerCallback = (entries, observer) => {
      const callCallback = (entry) => {
        callback(entry, observer);
      };

      entries.forEach(callCallback);
    };

    return new IntersectionObserver(observerCallback, options);
  }, [callback]);
};
