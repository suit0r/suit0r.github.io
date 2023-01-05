import { useBreakpointsContext } from "$/contexts";
import { makeClassName } from "$/helpers";
import styles from "./Content.module.scss";

export const Main = (props) => {
  const { mobile } = useBreakpointsContext();

  return (
    <main
      className={makeClassName(
        styles.content,
        [styles.content__mobile, mobile],
        "relative"
      )}
    >
      {props.children}
    </main>
  );
};
