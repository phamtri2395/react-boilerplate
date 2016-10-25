import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';


/**
 * Import components
 */

import Root from './containers/Root';
import NoRoute from './containers/NoRoute';


/**
 * Routing
 */

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Root}>
    </Route>

    <Route path='*' component={NoRoute} />
  </Router>
);


/**
 * Render
 */

render(
  routes,
  document.getElementById('root')
);
