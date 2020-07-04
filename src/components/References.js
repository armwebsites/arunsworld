import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Fade } from "react-slideshow-image";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
const fadeImages = ["images/ref.png"];
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
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <main>
          {/* Main featured post */}

          <Grid container>
          <Grid item xs={12}>
                <center>
                  <img
                    src="/images/ref.png"
                    style={{ width: "50%" }}
                  />
                </center>
              </Grid>
            {/* <Grid item md={12}>
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
                            src={fadeImages[0]}
                          />
                        </div>
                      </div>
                    </Fade>
                  </Typography>
                </center>
              </div>
            </Grid> */}
          </Grid>

          {/* End main featured post */}
          <Grid container spacing={40} className={classes.mainGrid}>
            {/* Main content */}

            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                <b>Refernces</b>
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                <center>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Information</TableCell>
                        <TableCell>URL</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>All videos</TableCell>

                        <TableCell>Youtube.com</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>All images</TableCell>

                        <TableCell>Google.com</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Tic Tac Game</TableCell>

                        <TableCell>
                          https://github.com/superman66/tic-tac-toe-game/blob/master/src/Game.js
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>All information</TableCell>

                        <TableCell>wikipedia.com</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </center>
              </Typography>
            </Grid>
            {/* End main content */}

            <Grid item xs={6} md={4}>
              <GridList
                cellHeight={180}
                cols={3}
                style={{ width: 600, height: 500 }}
              >
                <GridListTile cols={1}>
                  <img src="/images/ref/1.png" />
                </GridListTile>
                <GridListTile cols={2}>
                  <img src="../images/ref/2.jpeg" />
                </GridListTile>
                <GridListTile cols={1}>
                  <img src="../images/ref/3.jpeg" />
                </GridListTile>
                <GridListTile cols={2}>
                  <img src="../images/ref/4.png" />
                </GridListTile>
              </GridList>
            </Grid>
            {/* Sidebar */}
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
