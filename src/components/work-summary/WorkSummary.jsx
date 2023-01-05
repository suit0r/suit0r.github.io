import { Item } from "$/components/timeline";
import { NarrowText, Spacer } from "$/components/content";
import { MainLink } from "$/components/link";
import { ActionBar } from "$/components/action-bar";
import { makeClassName } from "$/helpers";

import { JobTitle } from "./JobTitle";
import { StackTitle } from "./StackTitle";
import { Responsibilities } from "./Responsibilities";

import styles from "./WorkSummary.module.scss";

import calendar from "$/svg/icons/calendar.svg";

// TODO: link icon size, spacing, padding
// TODO: actions bar and side paneling
export const WorkSummary = (props) => {
  const { summary } = props;

  return (
    <Item heading={`${summary.startDate} - ${summary.endDate}`} icon={calendar}>
      <Spacer amount={24}>
        <NarrowText className={styles.work}>
          <Spacer>
            <MainLink
              iconVisible={summary.employerWebsite}
              className={makeClassName("h1", "seamless", styles["title-link"])}
              type="external"
              href={summary.employerWebsite}
            >
              {summary.employer}
            </MainLink>
          </Spacer>
        </NarrowText>
        <Spacer amount={12}>
          <JobTitle>Senior Front-end Dev, Team Lead</JobTitle>
        </Spacer>
        <Spacer amount={12}>
          <StackTitle stack={summary.techStack} />
        </Spacer>
        {summary.actions && <ActionBar actions={summary.actions} />}
        <Responsibilities list={summary.responsibilities} />
      </Spacer>
    </Item>
  );
};
