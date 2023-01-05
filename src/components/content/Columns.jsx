import { makeClassName } from "$/helpers";

import styles from "./Content.module.scss";

export const Columns = (props) => (
  <div
    className={makeClassName(
      styles.grid,
      styles[`grid__${props.amount}`],
      styles[`gap__${props.gap}`]
    )}
  >
    {props.children}
  </div>
);
