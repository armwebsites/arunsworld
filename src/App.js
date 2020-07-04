import React, { Component } from "react";
import "./App.css";

import Toolbar1 from "./components/Toolbar.js";
import Footer from "./components/Footerpage.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar1 />

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
