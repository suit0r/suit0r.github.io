import { useBreakpointsContext } from "$/contexts";
import { makeClassName } from "$/helpers";

import styles from "./Timeline.module.scss";

export const Timeline = (props) => {
  const { mobile } = useBreakpointsContext();

  return (
    <ul className={makeClassName([styles.timeline, !mobile])}>
      {props.children}
    </ul>
  );
};
