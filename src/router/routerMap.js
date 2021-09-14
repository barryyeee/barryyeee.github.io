import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import About from '../pages/about';
import Work from "../pages/work";
import Design from "../pages/work/design/index";
import Drawing from "../pages/work/drawing/index";
import Application from "../pages/work/application/index";
import Game from "../pages/work/game/index";
import ScrollToTop from "../components/scrollToTop";

export default () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/work' component={Work} />
        <Route path='/application' component={Application} />
        <Route path='/drawing' component={Drawing} />
        <Route path='/design' component={Design} />
        <Route path='/game' component={Game} />
        <Redirect to="/"/>
      </Switch>
    </ScrollToTop>

  )
}
