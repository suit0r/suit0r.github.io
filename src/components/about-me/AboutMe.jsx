import { Item } from "$/components/timeline";
import { Columns } from "$/components/content";

import { useToggleContext } from "$/contexts";
import { useBreakpointsContext } from "$/contexts";
import { makeClassName } from "$/helpers";

import { Address } from "./Address";
import { PhotoBlurb } from "./PhotoBlurb";
import { School } from "./School";
import { OnlineSchools } from "./OnlineSchools";

import styles from "./AboutMe.module.scss";

import atSign from "$/svg/icons/at-sign.svg";

// TODO: online institutions
export const AboutMe = () => {
  const { toggleGlobally } = useToggleContext();
  const { smallish } = useBreakpointsContext();

  return (
    <Item h={1} heading="Irakli Tsaishvili" icon={atSign}>
      <Columns
        gap={smallish ? 24 : 96}
        symmetric={smallish}
        className={makeClassName([styles["about-me-columns"], !smallish])}
      >
        <div>
          <Address />
          <PhotoBlurb />
        </div>
        <div>
          <School
            school="Humber College"
            year="2006"
            degrees="Liberal Arts and Sciences"
          />
          <School
            school="York University"
            year="2010"
            degrees="English & Linguistics"
          />
          <School school="Online Institutions" year="2012+">
            <OnlineSchools toggleModal={toggleGlobally} />
          </School>
        </div>
      </Columns>
    </Item>
  );
};
