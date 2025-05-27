import { Routes, Route } from "react-router-dom";

import { Main } from "$/components/content";
import { SideLine, Timeline } from "$/components/timeline";

import { AboutDesign } from "$/components/about-design";
import { AboutMe } from "$/components/about-me";
import { Education } from "$/components/education";
import { Footer } from "$/components/footer";
import { Outro } from "$/components/outro";
import { WorkList } from "$/components/work-summary";
import { CmsPage } from "$/components/cms";

import { useBreakpointsContext } from "$/contexts";
import { makeClassName } from "$/helpers";

import styles from "./App.module.scss";

function App() {
  const { smallish } = useBreakpointsContext();

  return (
    <div
      className={makeClassName(styles.app, [styles.app__smallish, smallish])}
    >
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/pages/:slug" element={<CmsPage />} />
      </Routes>
    </div>
  );
}

export default App;
