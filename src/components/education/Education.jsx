import { useState, useEffect } from "react";

import { useBreakpointsContext } from "$/contexts";

import { Columns, Spacer } from "$/components/content";
import { Item } from "$/components/timeline";
import { School } from "$/components/about-me";

import book from "$/svg/icons/book.svg";

export const Education = () => {
  const [education, setEducation] = useState([]);

  const { breakpoints, breakpoint } = useBreakpointsContext();
  const columns = [1, 1, 1, 2, 2, 2][breakpoints.indexOf(breakpoint)];

  useEffect(() => {
    import("../../data/education").then(({ education }) =>
      setEducation(education)
    );
  }, []);

  return (
    <Item heading="Education" icon={book}>
      <Columns amount={columns}>
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
      </Columns>
      <Spacer>
        <h3 className="h2">Some noteworthy courses</h3>
      </Spacer>
      <Columns amount={columns}>
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
      </Columns>
    </Item>
  );
};

export default Education;
