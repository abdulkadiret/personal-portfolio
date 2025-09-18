import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Content from '../content';
import Navbar from '../components/Navbar';
import NotFoundPage from '../components/404Page';

const AppRoutes = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Content} />
      <Route path='*' component={NotFoundPage} />
    </Switch>
  </>
);

export default AppRoutes;
