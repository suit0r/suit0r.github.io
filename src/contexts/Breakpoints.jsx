import {
  useEffect,
  useState,
  useCallback,
  createContext,
  useContext,
} from "react";

import {
  MOBILE_SCREEN,
  SMALL_SCREEN,
  MEDIUM_SCREEN,
  LARGE_SCREEN,
  LARGEST_SCREEN,
} from "$/constants";

const BreakpointsContext = createContext();

export const BreakpointsProvider = (props) => {
  const generateBreakpoint = useCallback(() => {
    const makeBPquery = (min, max) =>
      [min, max]
        .map((val, ind) =>
          val
            ? ind
              ? `(max-width: ${val}px)`
              : `(min-width: ${val + 1}px)`
            : ``
        )
        .filter(Boolean)
        .join(" and ");

    const breakpoints = [
      [0, MOBILE_SCREEN, "mobile"],
      [MOBILE_SCREEN + 1, SMALL_SCREEN, "small"],
      [SMALL_SCREEN + 1, MEDIUM_SCREEN, "medium"],
      [MEDIUM_SCREEN + 1, LARGE_SCREEN, "large"],
      [LARGE_SCREEN + 1, LARGEST_SCREEN, "largest"],
      [LARGEST_SCREEN + 1, 0, "desktop"],
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
        breakpoints: [
          "mobile",
          "small",
          "medium",
          "large",
          "largest",
          "desktop",
        ],
        sizes: [
          MOBILE_SCREEN,
          SMALL_SCREEN,
          MEDIUM_SCREEN,
          LARGE_SCREEN,
          LARGEST_SCREEN,
          Infinity,
        ],
      }
    );

    return breakpoints;
  }, []);

  const [breakpoints, setBreakpoints] = useState(generateBreakpoint());

  useEffect(() => {
    const listener = () => setBreakpoints(generateBreakpoint());

    breakpoints.mql.addEventListener("change", listener);

    return () => breakpoints.mql.removeEventListener("change", listener);
  }, [breakpoints.mql, generateBreakpoint]);

  return (
    <BreakpointsContext.Provider value={{ ...breakpoints }}>
      {props.children}
    </BreakpointsContext.Provider>
  );
};

export const useBreakpointsContext = () => useContext(BreakpointsContext);
