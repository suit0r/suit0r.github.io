import { useEffect } from "react";
import styles from "./Timeline.module.scss";

// TODO: make this a transitioning line that tracks icons
export const SideLine = () => {
  return <div className={`${styles.sideline} absolute`} />;
};
