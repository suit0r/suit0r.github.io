import { MainLink } from "$/components/link/MainLink";
import { ImageObject } from "$/components/image-object";

import styles from "./Link.module.scss";
import { makeClassName } from "$/helpers";

export const SocialLink = (props) => (
  <MainLink
    className={makeClassName(
      props.className,
      "seamless",
      styles["social-link"]
    )}
    href={props.href}
    type={props.type || "external"}
  >
    <ImageObject icon={props.icon} />
    <b>{props.children}</b>
  </MainLink>
);

export default SocialLink;
