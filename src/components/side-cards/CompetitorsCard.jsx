import { makeClassName } from "$/helpers/makeClassName";

import styles from "./SideCards.module.scss";

export const CompetitorsCard = (props) => (
  <aside className={makeClassName("relative", styles["side-card"])}>
    <h4>{props.employer.name}&apos;s Competitors</h4>
    <ul className="small-text">
      {props.employer.competitors.map((competitor) => (
        <li key={competitor.name}>
          <a href={competitor.website} target="ExternalFrame">
            {competitor.name}
          </a>
        </li>
      ))}
    </ul>
  </aside>
);
