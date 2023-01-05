import { makeClassName } from "$/helpers";

import styles from "./Content.module.scss";

export const NarrowText = (props) => (
  <div className={makeClassName(styles.narrow, props.className)}>
    {props.children}
  </div>
);
