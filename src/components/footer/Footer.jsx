import { makeClassName } from "$/helpers";

import styles from "./Footer.module.scss";

const year = new Date().getFullYear();

export const Footer = (props) => (
  <footer className={makeClassName(props.className, styles.footer)}>
    <p className="tiny-text">Irakli Tsaishvili</p>
    <p className="tiny-text">&#169;&nbsp;{year}</p>
    <p className="tiny-text">suit0r.github.io</p>
  </footer>
);
