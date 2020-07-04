import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import YouTube from "react-youtube";
import { Fade } from "react-slideshow-image";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
const fadeImages = ["images/Hobbies/netflix/1.png", "images/Hobbies/tv.jpg"];
const fadeProperties = {
  duration: 3000,
  transitionDuration: 300,
  //infinite: false,
  indicators: true
};
const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(2100 + theme.spacing.unit * 3 * 2)]: {
      width: 2100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

function Home(props) {
  const { classes } = props;
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <main>
          {/* Main featured post */}

          <Grid container>
            <Grid item md={12}>
              <div>
                <center>
                  <Typography>
                    <Fade {...fadeProperties}>
                      <div className="each-fade">
                        <div className="image-container">
                          <img
                            style={{ width: "100%", height: 500 }}
                            src={fadeImages[0]}
                          />
                        </div>
                      </div>
                      <div className="each-fade">
                        <div className="image-container">
                          <img
                            style={{ width: "100%", height: 500 }}
                            src={fadeImages[1]}
                          />
                        </div>
                      </div>
                    </Fade>
                  </Typography>
                </center>
              </div>
            </Grid>
          </Grid>

          {/* End main featured post */}
          <Grid container spacing={40} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                <b>What are TV Shows?</b>
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                <img
                  src="/images/Hobbies/netflix/logo.png"
                  style={{ width: 500, float: "right" }}
                />
                A television show (often simply TV show) is any content produced
                for broadcast via over-the-air, satellite, cable, or internet
                and typically viewed on a television set, excluding breaking
                news, advertisements, or trailers that are typically placed
                between shows. Television shows are most often scheduled well
                ahead of time and appear on electronic guides or other TV
                listings. A television show might also be called a television
                program (British English: programme), especially if it lacks a
                narrative structure. A television series is usually released in
                episodes that follow a narrative, and are usually divided into
                seasons (US and Canada) or series (UK) – yearly or semiannual
                sets of new episodes. A show with a limited number of episodes
                may be called a miniseries, serial, or limited series. A
                one-time show may be called a "special". A television film
                ("made-for-TV movie" or "television movie") is a film that is
                initially broadcast on television rather than released in
                theaters or direct-to-video. Television shows can be viewed as
                they are broadcast in real time (live), be recorded on home
                video or a digital video recorder for later viewing, or be
                viewed on demand via a set-top box or streamed over the
                internet.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Top 5 Netflix Shows
              </Typography>
              <Typography variant="h9" color="inherit" paragraph>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Pos</TableCell>
                      <TableCell>Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>BoJack Horseman</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Archer</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>Portlandia</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4</TableCell>
                      <TableCell>Parks and Recreation</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell>New Girl'</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Typography>
            </Grid>
            {/* End main content */}
            {/* Sidebar */}

            <Grid item xs={12} md={4}>
              <Paper elevation={0}>
                <Typography variant="h6" gutterBottom>
                  What is Netflix?
                </Typography>
                <Typography>
                  <YouTube videoId="WotT-waWaT0" opts={opts} />
                </Typography>
              </Paper>
              <Grid item xs={6} md={4}>
                <GridList
                  cellHeight={180}
                  cols={3}
                  style={{ width: 600, height: 500 }}
                >
                  <GridListTile cols={1}>
                    <img src="/images/Hobbies/netflix/2.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Hobbies/netflix/3.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/Hobbies/netflix/4.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Hobbies/netflix/1.png" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/Hobbies/netflix/2.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="/images/Hobbies/netflix/5.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Hobbies/netflix/6.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/Hobbies/netflix/7.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Hobbies/netflix/8.jpeg" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/Hobbies/netflix/9.jpeg" />
                  </GridListTile>
                </GridList>
              </Grid>
            </Grid>
          </Grid>
          {/* Sub featured posts */}

          {/* End sub featured posts */}
        </main>
      </div>
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
