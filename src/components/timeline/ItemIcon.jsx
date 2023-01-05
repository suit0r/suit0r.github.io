import { ImageObject } from "$/components/image-object";

import styles from "./Timeline.module.scss";

export const ItemIcon = (props) => (
  <span className={`${styles["item-icon"]} circle absolute`}>
    <ImageObject className="absolute" icon={props.icon} />
  </span>
);
