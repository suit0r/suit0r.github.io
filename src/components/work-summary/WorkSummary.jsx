import { useBreakpointsContext } from "$/contexts";
import { Item } from "$/components/timeline";
import { NarrowText, Spacer } from "$/components/content";
import { MainLink } from "$/components/link/MainLink";
import {
  CardsContainer,
  AboutCompanyCard,
  CompetitorsCard,
} from "$/components/side-cards";

import { makeClassName } from "$/helpers";

import { JobTitle } from "./JobTitle";
import { StackTitle } from "./StackTitle";
import { Responsibilities } from "./Responsibilities";
import { SideCardFlex } from "./SideCardFlex";

import styles from "./WorkSummary.module.scss";

import calendar from "$/svg/icons/calendar.svg";

// TODO: link icon size, spacing, padding
// TODO: actions bar and side paneling
// TODO: use the AboutCompany component differently

export const WorkSummary = (props) => {
  const { summary } = props;

  const { smallish } = useBreakpointsContext();

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
          <JobTitle>{summary.title}</JobTitle>
        </Spacer>
        <Spacer amount={12}>
          <StackTitle smallish={smallish} stack={summary.techStack} />
        </Spacer>
        <SideCardFlex>
          <Responsibilities list={summary.responsibilities} />
          <CardsContainer>
            {summary.employer.about && (
              <AboutCompanyCard employer={summary.employer} />
            )}
            {summary.employer.competitors && (
              <CompetitorsCard employer={summary.employer} />
            )}
          </CardsContainer>
        </SideCardFlex>
      </Spacer>
    </Item>
  );
};
