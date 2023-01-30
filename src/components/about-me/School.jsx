import { Spacer } from "$/components/content";

import styles from "./AboutMe.module.scss";

export const School = (props) => (
  <Spacer amount={props.spacing}>
    {props.school && (
      <dl className={styles.school} aria-label="School and program info">
        <dt>
          <span className="h3">{props.school}</span>
          {props.stream && <span>{props.stream}</span>}
          <span>({props.year})</span>
        </dt>
        <Spacer as="dd" amount={6}>
          {[].concat(props.degrees).join(props.joiner || " | ")}
        </Spacer>
      </dl>
    )}
    <Spacer amount={6}>{props.children}</Spacer>
  </Spacer>
);
