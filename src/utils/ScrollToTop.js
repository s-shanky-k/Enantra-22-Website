import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, [location]);

  return null;
}

export default ScrollToTop;
