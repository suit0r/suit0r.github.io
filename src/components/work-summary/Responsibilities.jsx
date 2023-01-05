import styles from './WorkSummary.module.scss';

export const Responsibilities = (props) => (
  <ul className={styles.responsibilities}>
    {props.list.map((item, ind) => (
      <li key={ind}>{item}</li>
    ))}
  </ul>
);
