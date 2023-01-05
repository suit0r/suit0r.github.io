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

  return (
    <>
      <Spacer amount={6}>
        <Button blank icon={list} onClick={props.toggleModal}>
          View List
        </Button>
      </Spacer>
      <Modal heading="Online Institutions and Courses">
        <Grid columns={columns}>
          <School
            spacing={0}
            school="Various Online Diplomas"
            year="2012+"
            degrees={[
              "JavaScript",
              "CSS",
              "HTML",
              "UX and Web Design",
              "Algorithms & Data",
              "Structures",
              "Software Engineering",
              "Databases and Data Administration",
            ]}
          />
          <School
            spacing={0}
            school="Various Online Diplomas"
            year="2012+"
            degrees={[
              "JavaScript",
              "CSS",
              "HTML",
              "UX and Web Design",
              "Algorithms & Data",
              "Structures",
              "Software Engineering",
              "Databases and Data Administration",
            ]}
          />
          <School
            spacing={0}
            school="Various Online Diplomas"
            year="2012+"
            degrees={[
              "JavaScript",
              "CSS",
              "HTML",
              "UX and Web Design",
              "Algorithms & Data",
              "Structures",
              "Software Engineering",
              "Databases and Data Administration",
            ]}
          />
        </Grid>
      </Modal>
    </>
  );
};
