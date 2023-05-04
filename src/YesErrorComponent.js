import React from "react";

const YesErrorComponent = () => {
  //this error will trigger the error boundary to provide the fallback
  throw new Error("error!");
  return <div>Yes Error Component</div>;
};

export default YesErrorComponent;
