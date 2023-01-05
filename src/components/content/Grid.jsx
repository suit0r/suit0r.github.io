import { filterAndJoin } from "$/helpers";

import styles from "./Content.module.scss";

export const Grid = (props) => {
  const columns =
    typeof props.columns === `number` ? `grid__${props.columns}` : `grid__1`;

  return (
    <div
      className={filterAndJoin([styles.grid, styles[columns], props.className])}
    >
      {props.children}
    </div>
  );
};
