import { makeClassName } from "$/helpers/makeClassName";

import styles from "./SideCards.module.scss";

export const AboutCompanyCard = (props) => (
  <aside className={makeClassName("relative", styles["side-card"])}>
    <h4>About {props.employer.name}</h4>
    <p className="small-text">{props.employer.about}</p>
    <footer
      className={makeClassName("small-text", styles["side-card__footer"])}
    >
      <div className="flex align__center">
        <img height="26" src={props.employer.logo} alt="" role="presentation" />
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
