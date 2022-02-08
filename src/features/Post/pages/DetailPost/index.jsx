import React from "react";
import { useRouteMatch } from "react-router-dom";

function DetailPost() {
  const routeMatch = useRouteMatch();
  console.log("route match", routeMatch.path);
  return <div>{/* <h1>{title}</h1> */}this is detail</div>;
}

export default DetailPost;
