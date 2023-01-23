import { useBreakpointsContext } from "$/contexts";
import { makeClassName } from "$/helpers";

export const SideCardFlex = (props) => {
  const { breakpoint, breakpoints } = useBreakpointsContext();

  return (
    <div
      className={makeClassName(
        "flex",
        "justify__between",
        "align__start",
        ["column", "column", "column", "column", "row", "row"][
          breakpoints.indexOf(breakpoint)
        ]
      )}
    >
      {props.children}
    </div>
  );
};
