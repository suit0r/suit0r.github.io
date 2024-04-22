import { useState } from "react";

import { Main } from "$/components/content";
import { SideLine, Timeline } from "$/components/timeline";

import { AboutDesign } from "$/components/about-design";
import { AboutMe } from "$/components/about-me";
import { Education } from "$/components/education";
import { Footer } from "$/components/footer";
import { Outro } from "$/components/outro";
import { WorkList } from "$/components/work-summary";

import { useBreakpointsContext, useToggleContext } from "$/contexts";
import { makeClassName } from "$/helpers";

import styles from "./App.module.scss";

function App() {
  const { smallish } = useBreakpointsContext();

  return (
    <div
      className={makeClassName(styles.app, [styles.app__smallish, smallish])}
    >
      <Main>
        {!smallish && <SideLine />}
        <Timeline>
          <AboutMe />
          <AboutDesign />
          <WorkList />
          <Education />
          <Outro />
        </Timeline>
        <Footer />
      </Main>
    </div>
  );
}

export default App;
