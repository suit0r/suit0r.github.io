import styles from "./WorkSummary.module.scss";

import stack from "$/svg/icons/layers.svg";

export const StackTitle = (props) => (
  <ul className={styles.stack} aria-label="Tech stack">
    <img src={stack} alt="" role="presentation" />
    {props.stack.map((item, index) => (
      <li key={item}>
        {Boolean(index) && <span aria-hidden> / </span>}
        {item}
      </li>
    ))}
  </ul>
);
