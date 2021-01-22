import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Content from '../content';
import Navbar from '../components/Navbar';

export default () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Content} />
    </Switch>
  </>
);
