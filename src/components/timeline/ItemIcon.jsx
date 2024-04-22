import { motion } from "framer-motion";

import { ImageObject } from "$/components/image-object";
import { makeClassName } from "$/helpers";

import styles from "./Timeline.module.scss";

export const ItemIcon = (props) => {
  return props.isVisible ? (
    <motion.span
      className={makeClassName(
        props.className,
        styles["item-icon"],
        "circle",
        "absolute"
      )}
      initial={{ transform: "scale3d(0,0,0)" }}
      animate={{ transform: "scale3d(1,1,1)" }}
      transition={{
        type: "spring",
      }}
    >
      <ImageObject className="absolute" icon={props.icon} />
    </motion.span>
  ) : null;
};
