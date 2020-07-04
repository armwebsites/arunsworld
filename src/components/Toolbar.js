import React, { Component } from "react";
import India from "./India/India.js";
import Home from "./Home.js";
import "../App.css";
import AboutUs from "./Aboutme/aboutus.js";
import Refernces from "./References.js";
import Hobbies from "./Hobbies/hobbies.js";
import Cricket from "./Hobbies/cricket";
import Reading from "./Hobbies/reading";
import Netflix from "./Hobbies/netflix";
import History from "./India/history";
import Economics from "./India/economics";
import Lankmarks from "./India/landmarks";
import Map from "./India/map";
import Symbols from "./India/symbols";
import Wonders from "./India/wonders";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppBar } from "@material-ui/core";

class Toolbar1 extends Component {
  state = {
    flag: false
  };
  handlechange = () => {
    this.setState({ flag: !this.state.flag });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <AppBar
            position="fixed"
            color={!this.state.flag ? "secondary" : "primary"}
          >
            <Toolbar variant="dense">
              <img href="/Home" style={{ height: "10%" }} className="App-logo" src="/images/logo.jpg" />
              <NavLink to="/">
                <Button color="">
                  <SvgIcon>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </SvgIcon>
                  Home
                </Button>
              </NavLink>
              <NavLink to="/Aboutus">
                <Button color="">About Me</Button>
              </NavLink>

              <NavLink to="/Hobbies">
                <Button color="">
                  <img src="" style={{ height: 20 }} />
                  My Hobbies
                </Button>
              </NavLink>
              <NavLink to="/India">
                <Button color="">My Country</Button>
              </NavLink>
              <NavLink to="/Refernces">
                <Button color="">References</Button>
              </NavLink>
              <Button
                style={{ position: "absolute", right: 0 }}
                onClick={this.handlechange}
              >
                Change Theme
              </Button>
            </Toolbar>
          </AppBar>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/India" component={India} />
            <Route path="/Aboutus" component={AboutUs} />
            <Route exact path="/Refernces" component={Refernces} />
            <Route path="/Hobbies" component={Hobbies} />
            <Route path="/Cricket" component={Cricket} />
            <Route path="/Reading" component={Reading} />
            <Route path="/Netflix" component={Netflix} />
            <Route path="/History" component={History} />
            <Route path="/Economics" component={Economics} />
            <Route path="/Landmarks" component={Lankmarks} />
            <Route path="/Maps" component={Map} />
            <Route path="/Symbols" component={Symbols} />
            <Route path="/Wonders" component={Wonders} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default Toolbar1;
