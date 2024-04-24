import { useEffect, useState } from "react";
import { stagger, useAnimate, useInView } from "framer-motion";

import { useBreakpointsContext } from "$/contexts";
import { Columns, Spacer } from "$/components/content";
import { SocialLink } from "$/components/link";
import { Item } from "$/components/timeline";

import styles from "$/components/content/Content.module.scss";

import atSign from "$/svg/icons/at-sign.svg";

export const Outro = () => {
  const { breakpoints, breakpoint } = useBreakpointsContext();
  const breakpointIndex = breakpoints.indexOf(breakpoint);
  const columns = [1, 1, 1, 2, 4, 4][breakpointIndex];
  const spacing = [12, 12, 9, 6, 6, 6][breakpointIndex];

  const [socials, setSocials] = useState([]);
  const [animTriggered, setAnimTriggered] = useState(false);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (!animTriggered && isInView) {
      animate(scope.current, {
        opacity: [0, 1],
      })
        .then(() => {
          animate(
            `div`,
            {
              opacity: [0, 1],
              y: [18, 0],
            },
            {
              type: "tween",
              delay: stagger(0.2, { from: "first" }),
            }
          );
        })
        .then(() => setAnimTriggered((state) => !state));
    }
  }, [animTriggered, isInView, animate]);

  useEffect(() => {
    import("../../data/contact").then(({ contact }) => setSocials(contact));
  }, []);

  return (
    <Item heading="Stay in Touch" icon={atSign} className="no-print">
      <Spacer>
        <p>
          I'm looking forward to hearing from you. Let's keep the conversation
          going on social media or keep it low key on email. I'm not very active
          on LinkedIn, but I'm on Instagram all the time.
        </p>
      </Spacer>
      <Columns ref={scope} amount={columns}>
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
