import { makeClassName } from "$/helpers";

import styles from "./WorkSummary.module.scss";

import stack from "$/svg/icons/layers.svg";

export const StackTitle = (props) => (
  <div
    className={makeClassName(
      "flex",
      styles.stack,
      `align__${props.smallish ? "start" : "center"}`
    )}
    aria-label="Tech stack"
  >
    <img src={stack} alt="" role="presentation" />
    <ul>
      {props.stack.map((item, index) => (
        <li key={item}>
          {Boolean(index) && <span aria-hidden>&nbsp;/ </span>}
          {item}
        </li>
      ))}
    </ul>
  </div>
);
