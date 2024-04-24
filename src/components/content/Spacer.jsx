import { createElement, forwardRef } from "react";

import styles from "./Content.module.scss";

const SpacerRefRender = (props, ref) => {
  const spacing =
    typeof props.amount === `number` ? `spacer__${props.amount}` : `spacer`;

  return createElement(props.as || `div`, {
    className: styles[spacing],
    children: props.children,
    ref,
  });
};

export const Spacer = forwardRef(SpacerRefRender);
