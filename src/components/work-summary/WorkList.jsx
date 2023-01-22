import { useEffect, useState } from "react";

import { WorkSummary } from "./WorkSummary";

export const WorkList = () => {
  const [workItems, setWorkItems] = useState([]);

  useEffect(() => {
    import("../../data/work.js")
      .then(({ work }) => setWorkItems(work))
      .catch((error) =>
        import.meta.env.PROD
          ? window.location.assign("https://github.com/suit0r")
          : console.error(error)
      );

    return () => setWorkItems([]);
  }, []);

  return workItems.map((workItem) => (
    <WorkSummary key={workItem.employer.name} summary={workItem} />
  ));
};
