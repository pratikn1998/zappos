import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Llamas from '../Llamas/Llamas';
import AboutPratik from '../Pratik/AboutPratik';
import TechDecision from '../Technical/TechDecision';

const Routes = () => {
  return (
    <section>
      <Switch>
        <Route exact path='/llamas' component={Llamas} />
        <Route exact path='/aboutpratik' component={AboutPratik} />
        <Route exact path='/technicaldecisions' component={TechDecision} />
      </Switch>
    </section>
  );
};

export default Routes;
