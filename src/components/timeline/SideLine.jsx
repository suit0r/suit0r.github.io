import { motion } from "framer-motion";

import styles from "./Timeline.module.scss";

export const SideLine = () => (
  <motion.div
    className={`${styles.sideline} absolute`}
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: `100%`, opacity: 1 }}
    transition={{
      ease: "linear",
      type: "just",
      duration: 1,
    }}
  />
);
