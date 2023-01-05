import styles from './Timeline.module.scss';

export const SideLine = () => (
  <div className={`${styles.sideline} absolute`}>
    <div className="circle absolute" role="presentation" />
  </div>
);
