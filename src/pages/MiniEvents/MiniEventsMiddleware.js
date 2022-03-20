import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WorkshopTemplate from "../../components/WorkshopTemplate/WorkshopTemplate";
import { MINI_EVENTS } from "../../data/MiniEvents";

function MiniEventsMiddleware() {
  const navigate = useNavigate();
  let { title } = useParams();

  const [data, setdata] = useState(null);

  useEffect(() => {
    let requiredData = null;

    for (let i = 0; i < MINI_EVENTS.length; i++) {
      if (title === MINI_EVENTS[i].url) {
        requiredData = MINI_EVENTS[i];
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

export default MiniEventsMiddleware;
