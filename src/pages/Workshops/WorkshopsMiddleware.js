import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WorkshopTemplate from "../../components/WorkshopTemplate/WorkshopTemplate";
import { WORKSHOPS } from "../../data/Workshops";
function WorkshopsMiddleware() {
  const navigate = useNavigate();
  let { title } = useParams();

  const [data, setdata] = useState(null);

  useEffect(() => {
    let requiredData = null;

    for (let i = 0; i < WORKSHOPS.length; i++) {
      if (title === WORKSHOPS[i].url) {
        requiredData = WORKSHOPS[i];
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

export default WorkshopsMiddleware;
