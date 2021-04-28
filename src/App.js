import React from 'react';
import './App.scss';
import { AnimatePresence } from "framer-motion"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage/homepage.component'
import Produse from './pages/Produse/Produse.component'
import TermsPage from './pages/TermsPage/TermsPage.component'
import Navigation from './components/navigation/navigation.component'
import {Helmet} from "react-helmet";

function App() {
  return (
    <Router>
      <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>JANMAR - Constructii, gradinarit si bricolaj</title>
          <meta name="description" content="Oferim din 1993, o gama variata de materiale de constructii, gradinarit si bricolaj" />
      </Helmet>
        <Navigation />
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                  path="/"
                  exact
                  render={
                    () => <HomePage/>
                  }
                >
                </Route>
                <Route
                  path="/produse"
                  exact
                  render={
                    () => <Produse/>
                  }
                >
                </Route>
                <Route
                  path="/info"
                  exact
                  render={
                    () => <TermsPage/>
                  }
                >
                </Route>
            </Switch>
          </AnimatePresence>
          )}
          />
      </div>
    </Router>
  );
}

export default App;
