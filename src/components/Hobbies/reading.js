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
  "images/Hobbies/reading/1.jpg",
  "images/Hobbies/reading/2.jpg"
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
                <b>Benefits of Reading</b>
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                <img
                  src="/images/Hobbies/reading/1.jpg"
                  style={{ width: 500, float: "right" }}
                />
                1. Mental Stimulation Studies have shown that staying mentally
                stimulated can slow the progress of (or possibly even prevent)
                Alzheimer’s and Dementia,[1] since keeping your brain active and
                engaged prevents it from losing power. Just like any other
                muscle in the body, the brain requires exercise to keep it
                strong and healthy, so the phrase “use it or lose it” is
                particularly apt when it comes to your mind. Doing puzzles and
                playing games such as chess have also been found to be helpful
                with cognitive stimulation.[2]
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                2. Stress Reduction No matter how much stress you have at work,
                in your personal relationships, or countless other issues faced
                in daily life, it all just slips away when you lose yourself in
                a great story. A well-written novel can transport you to other
                realms, while an engaging article will distract you and keep you
                in the present moment, letting tensions drain away and allowing
                you to relax.
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                3.Vocabulary Expansion This goes with the above topic: The more
                you read, the more words you gain exposure to, and they’ll
                inevitably make their way into your everyday vocabulary. Being
                articulate and well-spoken is of great help in any profession,
                and knowing that you can speak to higher-ups with
                self-confidence can be an enormous boost to your self-esteem. It
                could even aid in your career, as those who are well-read,
                well-spoken, and knowledgeable on a variety of topics tend to
                get promotions more quickly (and more often) than those with
                smaller vocabularies and lack of awareness of literature,
                scientific breakthroughs, and global events. Reading books is
                also vital for learning new languages, as non-native speakers
                gain exposure to words used in context, which will ameliorate
                their own speaking and writing fluency.
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                4.Stronger Analytical Thinking Skills Have you ever read an
                amazing mystery novel, and solved the mystery yourself before
                finishing the book? If so, you were able to put critical and
                analytical thinking to work by taking note of all the details
                provided and sorting them out to determine “whodunnit”. That
                same ability to analyze details also comes in handy when it
                comes to critiquing the plot; determining whether it was a
                well-written piece, if the characters were properly developed,
                if the storyline ran smoothly, etc. Should you ever have an
                opportunity to discuss the book with others, you’ll be able to
                state your opinions clearly, as you’ve taken the time to really
                consider all the aspects involved.
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                5. Better Writing Skills This goes hand-in-hand with the
                expansion of your vocabulary: Exposure to published,
                well-written work has a noted effect on one’s own writing, as
                observing the cadence, fluidity, and writing styles of other
                authors will invariably influence your own work. In the same way
                that musicians influence one another and painters use techniques
                established by previous masters, so do writers learn how to
                craft prose by reading the works of others.
              </Typography>
            </Grid>
            {/* End main content */}
            {/* Sidebar */}

            <Grid item xs={12} md={4}>
              <Paper elevation={0}>
                <Typography variant="h6" gutterBottom>
                  Benefits of Reading
                </Typography>
                <Typography>
                  <YouTube videoId="xqMozc4K4pg" opts={opts} />
                </Typography>
              </Paper>
              <Grid item xs={6} md={4}>
                <GridList
                  cellHeight={180}
                  cols={3}
                  style={{ width: 600, height: 500 }}
                >
                  <GridListTile cols={1}>
                    <img src="/images/Hobbies/reading/2.jpg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Hobbies/reading/3.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/Hobbies/reading/4.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Hobbies/reading/1.jpg" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/Hobbies/reading/2.jpg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="/images/Hobbies/reading/5.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Hobbies/reading/6.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/Hobbies/reading/7.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Hobbies/reading/8.jpeg" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/Hobbies/reading/9.jpeg" />
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
