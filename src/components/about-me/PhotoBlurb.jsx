import styles from "./AboutMe.module.scss";

import me from "$/svg/me.jpg";

export const PhotoBlurb = () => (
  <div className={`${styles["photo-blurb"]}`}>
    <img className="float" src={me} alt="me" height="64" width="64" />
    <p>
      Hi I like stuff. Coding is O.K, but I would rather be chilling and
      exploring. Hi I like stuff. Hi I like stuff. Coding is O.K, but I would
      rather be chilling and exploring. Hi I like stuff, but I would rather be
      chilling and exploring. Bunch more stuff will follow obviously, but I need
      to see how neatly the text wraps around this image. So far, so good.
    </p>
  </div>
);
