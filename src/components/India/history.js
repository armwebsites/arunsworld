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
  "images/India/history/p1.jpeg",
  "images/India/history/p2.jpeg"
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
                <b>History of India</b>
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                India is a land of ancient civilization. India's social,
                economic, and cultural configurations are the products of a long
                process of regional expansion. Indian history begins with the
                birth of the Indus Valley Civilization and the coming of the
                Aryans. These two phases are usually described as the pre-Vedic
                and Vedic age. Hinduism arose in the Vedic period. The fifth
                century saw the unification of India under Ashoka, who had
                converted to Buddhism, and it is in his reign that Buddhism
                spread in many parts of Asia. In the eighth century Islam came
                to India for the first time and by the eleventh century had
                firmly established itself in India as a political force. It
                resulted into the formation of the Delhi Sultanate, which was
                finally succeeded by the Mughal Empire, under which India once
                again achieved a large measure of political unity. It was in the
                17th century that the Europeans came to India. This coincided
                with the disintegration of the Mughal Empire, paving the way for
                regional states. In the contest for supremacy, the English
                emerged 'victors'. The Rebellion of 1857-58, which sought to
                restore Indian supremacy, was crushed; and with the subsequent
                crowning of Victoria as Empress of India, the incorporation of
                India into the empire was complete. It was followed by India's
                struggle for independence, which we got in the year 1947.
              </Typography>
              <Typography variant="h4" gutterBottom>
                India Timeline
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                Indian timeline takes us on a journey of the history of the
                subcontinent. Right from the ancient India, which included
                Bangladesh and Pakistan, to the free and divided India, this
                time line covers each and every aspect related to the past as
                well as present of the country. Read on further to explore the
                timeline of India.
              </Typography>
              <Typography variant="h4" gutterBottom>
                Economic History of India
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                Indus valley civilization, which flourished between 2800 BC and
                1800 BC, had an advanced and flourishing economic system. The
                Indus valley people practiced agriculture, domesticated animals,
                made tools and weapons from copper, bronze and tin and even
                traded with some Middle East countries.
              </Typography>
              <Typography variant="h4" gutterBottom>
                Medieval Indian History
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                After the death of Harsha the Rajputs came into prominence on
                the political horizons of North India. The Rajputs were known
                for their bravery and chivalry but family feuds and strong
                notions of personal pride often resulted into conflicts. The
                Rajputs weakened each other by constant wrangling.
              </Typography>
              <Typography variant="h4" gutterBottom>
                Akbar
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                Emperor Akbar, also known as Akbar the Great or Jalaluddin
                Muhammad Akbar, was the third emperor of the Mughal Empire,
                after Babur and Humayun. He was the son of Nasiruddin Humayun
                and succeeded him as the emperor in the year 1556, when he was
                only 13 years old.
              </Typography>
              <Typography variant="h4" gutterBottom>
                Shah Jahan
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                Shah Jahan, also known as Shahbuddin Mohammed Shah Jahan, was a
                Mughal Emperor who ruled in the Indian Subcontinent from 1628 to
                1658. He was the fifth Mughal ruler, after Babur, Humayun, Akbar
                and Jahangir. Shah Jahan succeeded the throne after revolting
                against his father, Jahangir.
              </Typography>
              <Typography variant="h4" gutterBottom>
                Chhatrapati Shivaji
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                Chatrapati Shivaji Maharaj was the founder of the Maratha Empire
                in western India. He is considered to be one of the greatest
                warriors of his time and even today, stories of his exploits are
                narrated as a part of the folklore. King Shivaji used the
                guerrilla tactics to capture a part of, the then, dominant
                Mughal empire.
              </Typography>
              <Typography variant="h4" gutterBottom>
                Ancient India
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                The History of India begins with the Indus Valley Civilization
                and the coming of the Aryans. These two phases are generally
                described as the pre-Vedic and Vedic periods. The earliest
                literary source that sheds light on India's past is the Rig
                Veda. It is difficult to date this work with any accuracy on the
                basis of tradition and ambiguous astronomical information
                contained in the hymns.
              </Typography>
              <Typography variant="h4" gutterBottom>
                Modern Indian History
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                During the late 16th and the 17th Centuries, the European
                trading companies in India competed with each other ferociously.
                By the last quarter of the 18th Century the English had outdone
                all others and established themselves as the dominant power in
                India. The British administered India for a period of about two
                centuries and brought about revolutionary changes in the social,
                political and the economic life of the country.
              </Typography>
            </Grid>
            {/* End main content */}
            {/* Sidebar */}

            <Grid item xs={12} md={4}>
              <Paper elevation={0}>
                <Typography variant="h6" gutterBottom>
                  History of India
                </Typography>
                <Typography>
                  <YouTube videoId="qZqKF0HQsl4" opts={opts} />
                </Typography>
              </Paper>
              <Grid item xs={6} md={4}>
                <GridList
                  cellHeight={180}
                  cols={3}
                  style={{ width: 600, height: 500 }}
                >
                  <GridListTile cols={1}>
                    <img src="/images/India/history/2.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/history/3.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/India/history/4.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/history/1.jpeg" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/India/history/2.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="/images/India/history/5.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/history/6.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/India/history/7.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/history/8.jpeg" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/India/history/9.jpeg" />
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
