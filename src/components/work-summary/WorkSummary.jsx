import { Item } from "$/components/timeline";
import { NarrowText, Spacer } from "$/components/content";
import { MainLink } from "$/components/link";
import { ActionBar, ActionItems } from "$/components/action-bar";

import { makeClassName } from "$/helpers";

import { JobTitle } from "./JobTitle";
import { StackTitle } from "./StackTitle";
import { Responsibilities } from "./Responsibilities";

import styles from "./WorkSummary.module.scss";

import calendar from "$/svg/icons/calendar.svg";

// TODO: link icon size, spacing, padding
// TODO: actions bar and side paneling
// TODO: use the AboutCompany component differently

export const WorkSummary = (props) => {
  const { summary } = props;

  return (
    <Item heading={`${summary.startDate} - ${summary.endDate}`} icon={calendar}>
      <Spacer amount={24}>
        <NarrowText className={styles.work}>
          <Spacer>
            <MainLink
              iconVisible={summary.employer.website}
              className={makeClassName("h1", "seamless", styles["title-link"])}
              type="external"
              href={summary.employer.website}
            >
              {summary.employer.name}
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
        <div className="flex justify__between">
          <Responsibilities list={summary.responsibilities} />
          <ActionItems employer={summary.employer} />
        </div>
      </Spacer>
    </Item>
  );
};
