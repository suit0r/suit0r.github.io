import { makeClassName } from "$/helpers";

import styles from "./ActionBar.module.scss";

// TODO: some sort of active visual feedback
export const ActionBar = (props) => (
  <div className={styles["action-bar"]}>
    <div className={makeClassName("relative", styles.actions)}>
      <ul>
        {props.actions.map((action) => (
          <li key={action}>
            <button>{action}</button>
          </li>
        ))}
      </ul>
      <div className={makeClassName("absolute", styles["highlight-bar"])} />
    </div>
  </div>
);
