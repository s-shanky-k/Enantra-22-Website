import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WorkshopTemplate from "../../components/WorkshopTemplate/WorkshopTemplate";
import { MEGA_EVENTS } from "../../data/MegaEvents";

function MegaEventsMiddleware() {
  const navigate = useNavigate();
  let { title } = useParams();

  const [data, setdata] = useState(null);

  useEffect(() => {
    let requiredData = null;

    for (let i = 0; i < MEGA_EVENTS.length; i++) {
      if (title === MEGA_EVENTS[i].url) {
        requiredData = MEGA_EVENTS[i];
      }
    }

    if (requiredData === null) {
      navigate(`/page-not-found`);
    } else {
      setdata(requiredData);
    }

    return () => {};
  }, []);

  return data !== null ? <WorkshopTemplate props={data} /> : null;
}

export default MegaEventsMiddleware;
