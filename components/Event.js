import * as React from "react";

export default () => {
  React.useEffect(() => {
    if (window.sa_event) {
      console.log("sa_event is defined");
      window.sa_event("test");
    } else {
      console.error("sa_event is not defined");
    }
  }, []);

  return <div></div>;
};
