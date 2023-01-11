import { useEffect, useState } from "react";

import { WorkSummary } from "./WorkSummary";

export const WorkList = () => {
  const [workItems, setWorkItems] = useState([]);

  useEffect(() => {
    import("../../data/work.js")
      .then(({ work }) => setWorkItems(work))
      .catch(() => window.location.assign("https://github.com/suit0r"));

    return () => setWorkItems([]);
  }, []);

  return workItems.map((workItem) => (
    <WorkSummary key={workItem.employer} summary={workItem} />
  ));
};
