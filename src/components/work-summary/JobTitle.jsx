import { makeClassName } from "$/helpers";

import styles from "./WorkSummary.module.scss";

import user from "$/svg/icons/user.svg";

export const JobTitle = (props) => (
  <p className={makeClassName(styles.title, "h2")}>
    <img src={user} alt="" role="presentation" />
    {props.children}
  </p>
);
