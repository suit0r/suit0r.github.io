import { MainLink } from "$/components/link/MainLink";
import { ImageObject } from "$/components/image-object";

export const SocialLink = (props) => (
  <MainLink href={props.href} type={props.type || "external"}>
    <ImageObject icon={props.icon} />
    {props.children}
  </MainLink>
);

export default SocialLink;
