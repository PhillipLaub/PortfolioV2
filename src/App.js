import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route path="/about">
            <Header />
            <About />
          </Route>

          <Route path="/projects">
            <Header />
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
