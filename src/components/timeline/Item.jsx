import { createElement, useEffect } from "react";
import { useAnimate, useInView, stagger } from "framer-motion";
import kebabCase from "lodash/kebabCase";

import { useBreakpointsContext } from "$/contexts";

import { ItemIcon } from "./ItemIcon";

import styles from "./Timeline.module.scss";

export const Item = (props) => {
  const id = kebabCase(props.heading);

  const { smallish } = useBreakpointsContext();

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      const startDelay = props.animDelay || 0;

      animate(
        `.${styles["item-icon"]}`,
        {
          scale: [0, 1],
        },
        {
          type: "spring",
          delay: stagger(0.1, {
            startDelay,
            ease: "anticipate",
          }),
        }
      );

      animate(
        ".h2",
        {
          x: [-18, 0],
        },
        {
          type: "spring",
          delay: stagger(0.1, {
            ease: "easeIn",
          }),
        }
      );
    }
  }, [isInView, props.animDelay]);

  return (
    <li
      className={`${styles["timeline-item"]} relative ${props.className || ""}`}
    >
      <article aria-labelledby={id} id={id}>
        <div ref={scope} className="flex align__center">
          {props.icon && !smallish && (
            <ItemIcon icon={props.icon} animDelay={props.animDelay} />
          )}
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
