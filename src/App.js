import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
import Footer from './components/layout/Footer';
function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path ='/' component={Landing} />
          <Route component={Routes} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
