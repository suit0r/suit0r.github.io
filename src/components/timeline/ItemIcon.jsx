import { ImageObject } from "$/components/image-object";
import { makeClassName } from "$/helpers";

import styles from "./Timeline.module.scss";

export const ItemIcon = (props) => {
  return (
    <span
      className={makeClassName(
        props.className,
        styles["item-icon"],
        "circle",
        "absolute"
      )}
    >
      <ImageObject className="absolute" icon={props.icon} />
    </span>
  );
};
