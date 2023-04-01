import { Main } from "$/components/content";
import { Timeline, SideLine } from "$/components/timeline";

import { AboutMe } from "$/components/about-me";
import { AboutDesign } from "$/components/about-design";
import { WorkList } from "$/components/work-summary";
import { Education } from "$/components/education";
import { Outro } from "$/components/outro";
import { Footer } from "$/components/footer";

import { useBreakpointsContext } from "$/contexts";
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
