import { Main } from "$/components/content";
import { Timeline, SideLine } from "$/components/timeline";

import { AboutMe } from "$/components/about-me";
import { WorkList } from "$/components/work-summary";

import { useBreakpointsContext } from "$/contexts";
import { makeClassName } from "$/helpers";

import styles from "./App.module.scss";

function App() {
  const { mobile } = useBreakpointsContext();

  return (
    <div className={makeClassName(styles.app, [styles.app__mobile, mobile])}>
      <Main>
        {!mobile && <SideLine />}
        <Timeline>
          <AboutMe />
          <WorkList />
        </Timeline>
      </Main>
    </div>
  );
}

export default App;
