import { makeClassName } from "$/helpers";

import styles from "./Content.module.scss";

export const Columns = (props) => (
  <div
    className={makeClassName(
      props.className,
      styles.grid,
      styles[`grid__${props.amount}`],
      styles[`gap__${props.gap}`]
    )}
  >
    {props.children}
  </div>
);

export const TextColumns = (props) => (
  <div
    className={makeClassName(
      props.className,
      styles[`text-columns__${props.columns || 2}`]
    )}
  >
    {props.children}
  </div>
);
