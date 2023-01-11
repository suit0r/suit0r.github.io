import { AboutCompany } from "$/components/about-company";

export const ActionItems = (props) => (
  <div className="relative">
    {summary.aboutEmployer && (
      <AboutCompany
        company={summary.employer}
        description={summary.aboutEmployer}
      >
        <div>icon and address</div>
      </AboutCompany>
    )}
  </div>
);
