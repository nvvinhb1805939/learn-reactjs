import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import DetailPost from "./pages/DetailPost";
import PostsList from "./pages/PostsList";

function PostFeature() {
  const routeMatch = useRouteMatch();
  return (
    <Switch>
      <Route path={routeMatch.path} component={PostsList} exact />
      <Route path={`${routeMatch.path}/:postTitle`} component={DetailPost} />
    </Switch>
  );
}

export default PostFeature;
