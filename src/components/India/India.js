import CssBaseline from "@material-ui/core/CssBaseline";
import React, { Component } from "react";
import { Fade } from "react-slideshow-image";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import YouTube from "react-youtube";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import { NavLink } from "react-router-dom";
const fadeImages = [
  "images/India/india1.jpg",
  "images/India/india2.jpg",
  "images/India/india3.jpg"
];
const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};
const fadeProperties = {
  duration: 3000,
  transitionDuration: 300,
  //infinite: false,
  indicators: true
};
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <div>
          {/* Main */}
          <div>
            <Grid container spacing={40}>
              {/* Main content */}
              <Grid item xs={12}>
                <center>
                  <img src="/images/India/banner.jpg" style={{ width: 2400 }} />
                </center>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  {/* Image Slider */}

                  <center>
                    <GridList
                      cellHeight={180}
                      cols={6}
                      style={{ width: 2400, height: "100%" }}
                    >
                      <GridListTile
                        cols={2}
                        style={{ height: 410, width: 800 }}
                      >
                        <GridListTileBar title="Indian History" />
                        <NavLink to="/History">
                          <img src="../images/India/Category/History.jpg" />
                        </NavLink>
                      </GridListTile>
                      <GridListTile
                        cols={2}
                        style={{ height: 410, width: 800 }}
                      >
                        <GridListTileBar title="Indian Map" />
                        <NavLink to="/Maps">
                          <img src="../images/India/Category/maps.jpg" />
                        </NavLink>
                      </GridListTile>
                      <GridListTile
                        cols={2}
                        style={{ height: 410, width: 800 }}
                      >
                        <GridListTileBar title="Indian Economics" />
                        <NavLink to="/Economics">
                          <img src="../images/India/Category/economy.jpg" />
                        </NavLink>
                      </GridListTile>
                      <GridListTile
                        cols={2}
                        style={{ height: 410, width: 800 }}
                      >
                        <GridListTileBar title="Indian Symbols and Marks" />
                        <NavLink to="/Symbols">
                          <img src="../images/India/Category/symbol.jpg" />
                        </NavLink>
                      </GridListTile>
                      <GridListTile
                        cols={2}
                        style={{ height: 410, width: 800 }}
                      >
                        <GridListTileBar title="Indian Landmarks" />
                        <NavLink to="/Landmarks">
                          <img src="../images/India/Category/landmarks.jpg" />
                        </NavLink>
                      </GridListTile>
                      <GridListTile
                        cols={2}
                        style={{ height: 410, width: 800 }}
                      >
                        <GridListTileBar title="Indian Wonders" />
                        <NavLink to="/Wonders">
                          <img src="../images/India/Category/wonders.jpg" />
                        </NavLink>
                      </GridListTile>
                    </GridList>
                  </center>
                </Typography>
              </Grid>
              {/* End main content */}
            </Grid>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
