import { makeClassName } from "$/helpers";
import { forwardRef } from "react";

import styles from "./Content.module.scss";

const ColumnsRefRenderer = (props, ref) => (
  <div
    ref={ref}
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

export const Columns = forwardRef(ColumnsRefRenderer);

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
