import { AboutCompanyCard } from "$/components/side-cards";

import styles from "./ActionBar.module.scss";

export const ActionItems = (props) => (
  <div className={`relative ${styles["action-items"]}`}>
    {props.employer.about && (
      <AboutCompanyCard
        company={props.employer.name}
        description={props.employer.about}
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
      </AboutCompanyCard>
    )}
  </div>
);
