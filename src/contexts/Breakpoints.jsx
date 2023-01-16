import { useEffect, useState, createContext, useContext } from "react";

import {
  MOBILE_SCREEN,
  SMALL_SCREEN,
  MEDIUM_SCREEN,
  LARGE_SCREEN,
  LARGEST_SCREEN,
} from "$/constants";

const BreakpointsContext = createContext();

const makeBPquery = (min, max) =>
  `(min-width: ${min + 1}px) and (max-width: ${max}px)`;

const generateBreakpoint = () => {
  const { MAX_SAFE_INTEGER } = Number;

  const breakpoints = [
    [0, MOBILE_SCREEN, "mobile"],
    [MOBILE_SCREEN, SMALL_SCREEN, "small"],
    [SMALL_SCREEN, MEDIUM_SCREEN, "medium"],
    [MEDIUM_SCREEN, LARGE_SCREEN, "large"],
    [LARGE_SCREEN, LARGEST_SCREEN, "largest"],
    [LARGEST_SCREEN, MAX_SAFE_INTEGER, "desktop"],
  ].reduce(
    (obj, value) => {
      const mql = window.matchMedia(makeBPquery(...value));

      obj[value[2]] = mql.matches;

      if (mql.matches) {
        obj.breakpoint = value[2];
        obj.mql = mql;
      }

      return obj;
    },
    {
      breakpoints: ["mobile", "small", "medium", "large", "largest", "desktop"],
      sizes: [
        MOBILE_SCREEN,
        SMALL_SCREEN,
        MEDIUM_SCREEN,
        LARGE_SCREEN,
        LARGEST_SCREEN,
        MAX_SAFE_INTEGER,
      ],
      breakpoint: undefined,
      mql: undefined,
    }
  );

  return breakpoints;
};

export const BreakpointsProvider = (props) => {
  const [breakpoints, setBreakpoints] = useState(generateBreakpoint());

  useEffect(() => {
    if (breakpoints.mql) {
      const listener = () => setBreakpoints(generateBreakpoint());

      breakpoints.mql.addEventListener("change", listener);

      return () => breakpoints.mql.removeEventListener("change", listener);
    }
  }, [breakpoints.mql]);

  return (
    <BreakpointsContext.Provider value={{ ...breakpoints }}>
      {props.children}
    </BreakpointsContext.Provider>
  );
};

export const useBreakpointsContext = () => useContext(BreakpointsContext);
