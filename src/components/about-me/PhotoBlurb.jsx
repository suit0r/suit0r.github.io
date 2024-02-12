import styles from "./AboutMe.module.scss";

import me from "$/img/me.jpg";
import me2x from "$/img/me-212.jpg";

export const PhotoBlurb = () => (
  <div className={`${styles["photo-blurb"]} no-print`}>
    <img
      srcSet={`${me} 1x, ${me2x} 1.5x, ${me2x} 2x, ${me2x} 3x, ${me2x} 4x`}
      alt="A photo of me hiking on Smokey Hallow"
      height="106"
      width="106"
      className="float"
    />
    <p>
      Hi there. That's me on the Smokey Hollow trail. Turns out it was designed
      to mimick Offa's Dyke Path as a token of friendship between Canada and
      Wales. I wonder if that qualifies me as a dual citizen? Anyway, I'm a
      full-stack JavaScript developer, in Toronto. My day job involves leading a
      rockstar tech team to break new frontiers. I love working in tech because
      it lets me be creative, technical, and help bring out the best in people
      on both sides of the screen.
    </p>
  </div>
);
