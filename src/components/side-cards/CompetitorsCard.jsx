import { makeClassName } from "$/helpers/makeClassName";
import { MainLink } from "../link";
import styles from "./SideCards.module.scss";

export const CompetitorsCardItem = (props) => (
  <li className={styles["competitors-card-item"]}>
    <div className="flex align__center">
      <a href={props.competitor.website} target="ExternalFrame">
        <img
          src={props.competitor.favicon}
          alt=""
          role="presentation"
          height="32"
          width="32"
        />
      </a>
      <div>
        <MainLink
          href={props.competitor.website}
          target="ExternalFrame"
          className={makeClassName(
            "seamless",
            styles["competitors-card-item__link"]
          )}
        >
          {props.competitor.name}
        </MainLink>
        <p className="tiny-text">{props.competitor.title}</p>
      </div>
    </div>
  </li>
);

export const CompetitorsCard = (props) => (
  <aside className={makeClassName("relative", styles["side-card"])}>
    <h4>{props.employer.name}&apos;s Competitors</h4>
    <ul className="small-text">
      {props.employer.competitors.map((competitor) => (
        <CompetitorsCardItem key={competitor.name} competitor={competitor} />
      ))}
    </ul>
  </aside>
);
