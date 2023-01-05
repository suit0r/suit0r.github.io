import { ImageObject } from "$/components/image-object";

import { makeClassName } from "$/helpers";

import styles from "./Button.module.scss";

export const Button = (props) => {
  const buttonClasses = makeClassName(props.className, [
    styles.blank,
    props.blank,
  ]);

  const wrapperClasses = makeClassName(
    styles.wrapper,
    [`flex`, props.icon],
    (props.icon && props.alignItems) || `align__center`
  );

  return (
    <button
      className={buttonClasses}
      style={props.style}
      onClick={props.onClick}
    >
      <div className={wrapperClasses}>
        {props.icon && <ImageObject icon={props.icon} />}
        {props.children}
      </div>
    </button>
  );
};
