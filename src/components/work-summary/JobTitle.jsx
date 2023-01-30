import { makeClassName } from "$/helpers";

import styles from "./WorkSummary.module.scss";

import user from "$/svg/icons/user.svg";

export const JobTitle = (props) => (
  <p className={makeClassName(styles.title, "h2", "flex", "align__start")}>
    <img src={user} alt="" role="presentation" />
    <span>{props.children}</span>
  </p>
);
