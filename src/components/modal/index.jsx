import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

import { ImageObject } from "$/components/image-object";
import { useBreakpointsContext, useToggleContext } from "$/contexts";
import { makeClassName } from "$/helpers";

import styles from "./Modal.module.scss";

import closeSquare from "$/svg/icons/x-square.svg";

export const Modal = (props) => {
  const { toggled, toggleGlobally } = useToggleContext();
  const { breakpoint } = useBreakpointsContext();

  return createPortal(
    <AnimatePresence>
      {toggled && (
        <motion.div
          className={makeClassName(styles.modal, styles.blurred)}
          initial={{
            opactiy: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opactiy: 0,
          }}
        >
          <div
            className={makeClassName("overlay", styles.backdrop)}
            onClick={toggleGlobally}
          />
          <motion.div
            className={makeClassName(
              styles.body,
              styles[`body__${breakpoint}`]
            )}
            initial={{
              transform: `translate(-50%, -50%) scale(0.1)`,
              opacity: 0.5,
            }}
            animate={{
              transform: `translate(-50%, -50%) scale(1)`,
              opacity: 1,
            }}
            exit={{
              transform: `translate(-50%, -50%) scale(0.1)`,
              opacity: 0,
            }}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
