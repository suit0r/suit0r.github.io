import { motion } from "framer-motion";

import { ImageObject } from "$/components/image-object";
import { makeClassName } from "$/helpers";

import styles from "./Timeline.module.scss";

export const ItemIcon = (props) => (
  <motion.span
    className={makeClassName(
      props.className,
      styles["item-icon"],
      "circle",
      "absolute"
    )}
    initial={{ transform: "scale(0)" }}
    animate={{ transform: "scale(1)" }}
    transition={{
      type: "spring",
    }}
  >
    <ImageObject className="absolute" icon={props.icon} />
  </motion.span>
);
