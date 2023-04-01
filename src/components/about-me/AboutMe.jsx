import { Item } from "$/components/timeline";

import { Address } from "./Address";
import { PhotoBlurb } from "./PhotoBlurb";

import user from "$/svg/icons/user.svg";

export const AboutMe = () => (
  <Item h={1} heading="Irakli Tsaishvili" icon={user}>
    <Address />
    <PhotoBlurb />
  </Item>
);
