import { Item } from "$/components/timeline";

import { Address } from "./Address";
import { PhotoBlurb } from "./PhotoBlurb";

import user from "$/svg/icons/user.svg";

export const AboutMe = () => {
  const { scrollTop } = document.scrollingElement;
  const animDelay = scrollTop > 240 ? 0.25 : 0;

  return (
    <Item animDelay={animDelay} h={1} heading="Irakli Tsaishvili" icon={user}>
      <Address />
      <PhotoBlurb />
    </Item>
  );
};
