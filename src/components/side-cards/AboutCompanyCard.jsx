import { useEffect } from "react";
import { useAnimate, useInView } from "framer-motion";

import { makeClassName } from "$/helpers/makeClassName";

import styles from "./SideCards.module.scss";

export const AboutCompanyCard = (props) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        {
          x: [24, 0],
        },
        {
          type: "spring",
          velocity: 2,
          mass: 0.4,
        }
      );
    }
  }, [isInView, animate]);

  return (
    <aside
      ref={scope}
      className={makeClassName("relative", styles["side-card"])}
    >
      <h4>About {props.employer.name}</h4>
      <p className="small-text">{props.employer.about}</p>
      <footer
        className={makeClassName("small-text", styles["side-card__footer"])}
      >
        <div className="flex align__center">
          <img
            height="26"
            src={props.employer.logo}
            alt=""
            role="presentation"
          />
          {props.employer.address ? (
            <address className="tiny-text">
              {props.employer.address.street}
              <br />
              {props.employer.address.city}, {props.employer.address.region},{" "}
              {props.employer.address.country}
            </address>
          ) : (
            <span className="tiny-text">No longer in business</span>
          )}
        </div>
      </footer>
    </aside>
  );
};
