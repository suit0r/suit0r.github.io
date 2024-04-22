import { MainLink } from "$/components/link";

import styles from "./AboutMe.module.scss";

import me from "$/img/me.jpg";
import me2x from "$/img/me-212.jpg";

export const PhotoBlurb = () => (
  <div className={`${styles["photo-blurb"]} no-print`}>
    <img
      srcSet={`${me} 1x, ${me2x} 1.5x, ${me2x} 2x, ${me2x} 3x, ${me2x} 4x`}
      alt="A photo of me hiking the Smokey Hallow trail"
      height="106"
      width="106"
      className="float"
    />
    <p>
      Hi there. That's me preparing to hike the{" "}
      <MainLink hideIcon href="https://tourismhamilton.com/smokey-hollow/">
        Smokey Hollow
      </MainLink>
      . It's a long and beautiful trail in Waterdown, Ontario, Canada parts of
      which have been designed to mimic Offa's Dyke Path, in Wales, as a token
      of friendship between the two countries. Does this hike qualify me as a
      dual citizen? It was a treat, for sure.
    </p>
    <p>
      Anyway, I'm a full-stack developer, in Toronto, specializing in front-end.
      I love working in tech because it lets me hone my creative skillset with a
      technical framework. I look forward to applying my learnings in psychology
      and linguistics to work on complex problems that demand seamless
      execution. And as a team lead, I strive to bring out the best in my
      teammates.
    </p>
  </div>
);
