import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop(props) {
  const location = useLocation();

  useEffect(() => {
    // if( location.pathname!="/"){
    window.scrollTo(0, 0);
    // }
   
    let url = window.location.href.split("#")[1];
    // console.log({url});
    if (url && url !== "") {
   
      document.getElementById(url) &&
        document.getElementById(url).scrollIntoView();
        // window.scrollBy({ top: -100, behavior: 'smooth' });
    }
  }, [location]);

  return <>{props.children}</>;
}
