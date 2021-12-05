import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//this function scroll to the top when navigate between routes
export default function ScrollToTop() {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

