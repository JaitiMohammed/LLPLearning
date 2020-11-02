const { Route } = require("react-router-dom");
import React from "react";
import { Switch } from "react-router-dom";

const routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route excat path='/login' component={} />
        <Route exact path='/register' component={} />
        <Route excat path='/blog' component={} />
        <Route exact path='/courses' component={} />
      </Switch>
    </>
  );
};

export default routes;
