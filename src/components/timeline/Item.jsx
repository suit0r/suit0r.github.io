import { createElement, useState, useEffect, useCallback, useRef } from "react";
import kebabCase from "lodash/kebabCase";

import { useBreakpointsContext } from "$/contexts";
import { useIntersectionObserver } from "$/hooks";

import { ItemIcon } from "./ItemIcon";

import styles from "./Timeline.module.scss";

export const Item = (props) => {
  const id = kebabCase(props.heading);

  const { smallish } = useBreakpointsContext();

  const [isVisible, setIsVisible] = useState(false);

  const tid = useRef();

  const animateOnVisible = useCallback(
    (entry) => {
      // TODO: sloppy. delayed only from top
      if (props.stagger && !document.scrollingElement.scrollTop) {
        setTimeout(() => {
          setIsVisible(entry.isVisible);
          // TODO: stagger amount plus sideline. bind to events
        }, props.stagger + 555);
      } else {
        setIsVisible(entry.isVisible);
      }
    },
    [props.stagger]
  );

  const observer = useIntersectionObserver(animateOnVisible);

  const [target, setTarget] = useState(null);

  useEffect(() => {
    if (target) {
      observer.observe(target);

      return () => observer.unobserve(target);
    }

    return () => clearTimeout(tid.current);
  }, [target]);

  return (
    <li
      className={`${styles["timeline-item"]} relative ${props.className || ""}`}
    >
      <article aria-labelledby={id} id={id}>
        <div ref={setTarget} className="flex align__center">
          {props.icon && !smallish && (
            <ItemIcon icon={props.icon} isVisible={isVisible} />
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
