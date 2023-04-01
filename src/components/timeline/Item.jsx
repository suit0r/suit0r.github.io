import { createElement } from "react";
import kebabCase from "lodash/kebabCase";

import { useBreakpointsContext } from "$/contexts";

import { ItemIcon } from "./ItemIcon";

import styles from "./Timeline.module.scss";

export const Item = (props) => {
  const id = kebabCase(props.heading);

  const { smallish } = useBreakpointsContext();

  return (
    <li className={`${styles["timeline-item"]} relative`}>
      <article aria-labelledby={id} id={id}>
        <div className="flex align__center">
          {props.icon && !smallish && <ItemIcon icon={props.icon} />}
          {createElement(`h${props.h || 2}`, {
            className: "h2",
            children: props.heading,
          })}
        </div>
        {props.children}
      </article>
    </li>
  );
};
