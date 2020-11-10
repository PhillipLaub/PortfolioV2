import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function App() {
  const linkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/phillip-laub/";
    return null;
  };

  const gitHub = () => {
    window.location.href = "https://github.com/PhillipLaub/";

    return null;
  };
  return (
    <Router>
      <div className="app">
        <div className="app__left">
          <div className="app__icons">
            <LinkedInIcon onClick={linkedIn} className="app__social" />
            <GitHubIcon onClick={gitHub} className="app__social" />
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route path="/contact">
            <Header />
            <Contact />
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
