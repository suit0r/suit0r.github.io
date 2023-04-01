import { useState, useEffect } from "react";

import { useBreakpointsContext } from "$/contexts";
import { Modal } from "$/components/modal";
import { Spacer, Grid } from "$/components/content";
import { Button } from "$/components/button";

import { School } from "./School";

import list from "$/svg/icons/list.svg";

// TODO: change Button to text with different focus
export const OnlineSchools = (props) => {
  const { breakpoints, breakpoint } = useBreakpointsContext();
  const columns = [1, 1, 1, 2, 2, 2][breakpoints.indexOf(breakpoint)];

  const [education, setEducation] = useState([]);

  useEffect(() => {
    import("../../data/education").then(({ education }) =>
      setEducation(education)
    );
  }, []);

  return (
    <>
      <Spacer amount={6}>
        <Button blank icon={list} onClick={props.toggleModal}>
          View List
        </Button>
      </Spacer>
      <Modal heading="Some Noteworthy Courses">
        <Grid columns={columns}>
          {education.map((platform) => (
            <School
              key={platform.institution}
              spacing={0}
              year="2012+"
              joiner={`\n`}
              school={platform.institution}
              stream={platform.stream}
              degrees={platform.courses}
            />
          ))}
        </Grid>
      </Modal>
    </>
  );
};
