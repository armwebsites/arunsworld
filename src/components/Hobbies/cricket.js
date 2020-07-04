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
const fadeImages = [
  "images/Hobbies/cricket/banner.jpg",
  "images/Hobbies/cricket/banner2.jpeg"
];
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
                <b>What is cricket?</b>
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                <img
                  src="/images/Hobbies/cricket/cri.jpg"
                  style={{ width: 500, float: "right" }}
                />
                Cricket is played with two teams (say A and B) normally of 11
                players a side, one being the batting team while the other one
                is the fielding team. It is generally played on field with the
                main playing surface being called a ‘pitch’. (For details and
                dimensions of the pitch, wickets and creases, click the tab
                'Playing Surface' on the right). Team A will bat first and try
                to score as many runs as possible while the second team, team B,
                will bowl and field to make it as hard as possible for the
                batting team (A) to score these runs and to get them ‘out’ .
                Once team A are all out or otherwise their batting is determined
                closed as per the laws, the teams then swap over. So team B will
                bat to try and beat the score (number of runs scored) set by
                team A. Team A will bowl and field and try and restrict Team B
                from beating their score / getting them ‘all out’ before they
                do. Cricket is a game for all - adults, young people, children,
                men and women, girls and boys. They play cricket all over the
                world - on the street, on the beach, in the local park, wherever
                they can find a place to play. Above all they have fun doing so!
                Main aspects of playing the game Thus, broadly summarized, there
                are 6 key elements of cricket: Batting Bowling Fielding Catching
                Wicket Keeping Scoring runs Thanks to our cricketing friends in
                America, we can bring a good introductory compilation of the key
                aspects of the game through some video footage.
              </Typography>
              <Typography variant="h6" gutterBottom>
                World Ranking
              </Typography>
              <Typography variant="h9" color="inherit" paragraph>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Pos</TableCell>
                      <TableCell>Team</TableCell>
                      <TableCell>Matches</TableCell>
                      <TableCell>Points</TableCell>
                      <TableCell>Rating</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>England</TableCell>
                      <TableCell>55</TableCell>
                      <TableCell> 6,918</TableCell>
                      <TableCell> 126</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>India</TableCell>
                      <TableCell>58</TableCell>
                      <TableCell> 7,000</TableCell>
                      <TableCell> 121</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>New Zealand</TableCell>
                      <TableCell>43</TableCell>
                      <TableCell> 4,803</TableCell>
                      <TableCell> 112</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4</TableCell>
                      <TableCell> South Africa </TableCell>
                      <TableCell>45</TableCell>
                      <TableCell> 4,985</TableCell>
                      <TableCell> 111</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell>Pakistan</TableCell>
                      <TableCell>43</TableCell>
                      <TableCell> 4,370</TableCell>
                      <TableCell> 102</TableCell>
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
                  How to Play Cricket Video
                </Typography>
                <Typography>
                  <YouTube videoId="yPXAzgwwo0A" opts={opts} />
                </Typography>
              </Paper>
              <Grid item xs={6} md={4}>
                <GridList
                  cellHeight={180}
                  cols={3}
                  style={{ width: 600, height: 500 }}
                >
                  <GridListTile cols={1}>
                    <img src="/images/Hobbies/cricket/2.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Hobbies/cricket/3.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/Hobbies/cricket/4.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Hobbies/cricket/1.jpeg" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/Hobbies/cricket/2.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="/images/Hobbies/cricket/5.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Hobbies/cricket/6.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/Hobbies/cricket/7.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Hobbies/cricket/8.jpeg" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/Hobbies/cricket/9.jpeg" />
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
