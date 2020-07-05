import React from 'react';

import Nav from './layout/Nav';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './pages/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
