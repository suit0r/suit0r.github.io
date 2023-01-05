import { createPortal } from "react-dom";

import { ImageObject } from "$/components/image-object";
import { useBreakpointsContext, useToggleContext } from "$/contexts";
import { makeClassName } from "$/helpers";

import styles from "./Modal.module.scss";

import closeSquare from "$/svg/icons/x-square.svg";

export const Modal = (props) => {
  const { toggled, toggledClass, toggleGlobally } = useToggleContext();
  const { breakpoint } = useBreakpointsContext();

  // TODO: animate well

  return createPortal(
    <div
      className={makeClassName(styles.modal, styles[`modal__${toggledClass}`])}
    >
      <div
        className={makeClassName("overlay", styles.backdrop, [
          styles.blurred,
          toggled,
        ])}
        onClick={toggleGlobally}
      />
      <div
        className={makeClassName(styles.body, styles[`body__${breakpoint}`])}
      >
        {props.heading && (
          <div
            className={`${styles.heading} flex align__start justify__between`}
          >
            <h3 className="h2">{props.heading}</h3>
            <ImageObject
              svgStyle="cursor: pointer"
              onClick={toggleGlobally}
              icon={closeSquare}
            />
          </div>
        )}
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>,
    document.body
  );
};
