import { useBreakpointsContext } from "$/contexts";
import { makeClassName } from "$/helpers";

import styles from "./SideCards.module.scss";

export const CardsContainer = (props) => {
  const { breakpoints, breakpoint } = useBreakpointsContext();

  return (
    <div
      className={makeClassName(
        "flex",
        "align__start",
        "relative",
        styles["cards-container"],
        [
          `${styles["cards-container__shift-right"]}`,
          breakpoints.indexOf(breakpoint) > 2,
        ],
        ["column", "column", "row", "row", "column", "column"][
          breakpoints.indexOf(breakpoint)
        ]
      )}
    >
      {props.children}
    </div>
  );
};
