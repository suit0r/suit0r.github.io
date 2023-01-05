import { Item } from "$/components/timeline";
import { Columns } from "$/components/content";

import { useToggleContext } from "$/contexts";
import { useBreakpointsContext } from "$/contexts";

import { Address } from "./Address";
import { PhotoBlurb } from "./PhotoBlurb";
import { School } from "./School";
import { OnlineSchools } from "./OnlineSchools";

import atSign from "$/svg/icons/at-sign.svg";

// TODO: writeup, image, online institutions
export const AboutMe = () => {
  const { toggleGlobally } = useToggleContext();
  const { mobile } = useBreakpointsContext();

  return (
    <Item h={1} heading="Irakli Tsaishvili" icon={atSign}>
      <Columns amount={mobile ? 1 : 2} gap={mobile ? 24 : 48}>
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

export * from "./Address";
export * from "./PhotoBlurb";
export * from "./School";
