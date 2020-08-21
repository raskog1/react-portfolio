import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import all page destinations
import Main from "./pages/main";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Contact from "./pages/contact";

// Import global components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
