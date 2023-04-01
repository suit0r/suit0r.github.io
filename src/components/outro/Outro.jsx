import { useEffect, useState } from "react";

import { useBreakpointsContext } from "$/contexts";

import { Columns, Spacer } from "$/components/content";
import { SocialLink } from "$/components/link";
import { Item } from "$/components/timeline";

import atSign from "$/svg/icons/at-sign.svg";

export const Outro = () => {
  const { breakpoints, breakpoint } = useBreakpointsContext();
  const breakpointIndex = breakpoints.indexOf(breakpoint);
  const columns = [1, 1, 1, 2, 4, 4][breakpointIndex];
  const spacing = [12, 12, 9, 6, 6, 6][breakpointIndex];

  const [socials, setSocials] = useState([]);

  useEffect(() => {
    import("../../data/contact").then(({ contact }) => setSocials(contact));
  }, []);

  return (
    <Item heading="Stay in Touch" icon={atSign}>
      <Spacer>
        <p>
          Thank you for sticking around. I've included my socials, and email for
          good measure, to keep the conversation going. I'll admit I'm not very
          active on LinkedIn, but I'm a on Instagram all the time.
        </p>
      </Spacer>
      <Columns amount={columns}>
        {socials.map((social) => (
          <Spacer key={social.platform} amount={spacing}>
            <SocialLink
              href={social.url}
              icon={social.icon}
              type={social.linkType}
            >
              {social.platform}
            </SocialLink>
          </Spacer>
        ))}
      </Columns>
    </Item>
  );
};

export default Outro;
