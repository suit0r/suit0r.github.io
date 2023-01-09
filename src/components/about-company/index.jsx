import { makeClassName } from "$/helpers/makeClassName";
import styles from "./AboutCompany.module.scss";

export const AboutCompany = (props) => (
  <aside className={makeClassName("absolute", styles["about-company"])}>
    <h4>About {props.company}</h4>
    <p className="small-text">{props.description}</p>
    {props.children && (
      <footer
        className={makeClassName("small-text", styles["about-company__footer"])}
      >
        {props.children}
      </footer>
    )}
  </aside>
);
