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
const fadeImages = ["images/Home/welcome1.jpg", "images/Home/welcome2.jpeg"];
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
      <div >
        <main>
          {/* Main featured post */}

          <Grid container>
          {/* <center> */}
          <Grid item xs={12}>
                <center>
                  {/* <img
                    src="/images/Home/welcome1.jpg"
                    style={{ width: "50%" }}
                  /> */}
                </center>
              </Grid>
            {/* <Grid item md={12}>
              <div>
                
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
                
              </div>
            </Grid> */}
            {/* </center> */}
          </Grid>

          {/* End main featured post */}
          <Grid container style={{paddingTop:"5%"}} spacing={40} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                Summary of my Achievements in Academics:
              </Typography>
              <Typography variant="h9" gutterBottom>
                1. Pursuing my Advance Diploma in Web Development. <br />
                2. Currently I’m in my 7th trimester. <br />
                3. I have an Overall GPA of 3.23.
                <br />
              </Typography>
              <Typography variant="h6" gutterBottom>
                Summary of my Achievements in Leadership:
              </Typography>
              <Typography variant="h9" color="inherit" paragraph>
                <img
                  src="/images/Aboutme/1.jpeg"
                  style={{ width: 500, float: "right" }}
                />
                1. Currently I’m engaged as the Intermural & Intramural Sports
                Lead at CNAQ’s Sports and Wellness Department.
                <br />
                2. I was the CNAQ Falcon’s Nest Lead in the Sports and Wellness
                Department in 2018.
                <br />
                3. I was Vice-President of CNAQ IT Society( 2016-‘17)
                <br />
                4. I was School of IT representative in Students Representative
                Council (SRC) 2016-17.
                <br />
                5. I was the Sports and Wellness Representative in Students
                Representative Council (SRC) during 2017-‘18.
                <br />
                6. Recipient of CNAQ’s Male Performance Achievement Award & Team
                of the Year Award in 2016-‘17
                <br />
                7. I was the Captain of a Cricket team in Division C in Qatar
                Cricket Association (QCA) during 2017-18.
                <br />
                8. I was the Vice-Captain of CNA-Q Falcon Cricket Team during
                2017-‘18. I have been the highest Wicket Taker in 2017 & 2018.
                <br />
                9. President of CNAQ Sports Fans Club during 2017-‘18
                <br />
                10. I lead and organised CNAQ Indoor Cricket Tournament in 2018
                <br />
                11. Currently engaged in leading and organizing 3 tournaments in
                Futsal, Billiards & Foosball in the CNA-Q campus to promote
                Sports & Wellness.
                <br />
                12. I was the co-leader for the Charity week 2017.
                <br />
                13. I have taken part at the QAFCO leadership seminar <br />
                14. I was the Co-leader and Booth Leader of Souq al Areej 2016.
                <br />
                15. I was the performance lead for our performance in Mwahab
                2017.
                <br />
                16. I was the lead of the winning team for the competition IT
                Security at Skill competition 2017.
                <br />
                17. I was the member of the Falcons Sports Award committee 2017.
                <br />
              </Typography>
              <Typography variant="h6" gutterBottom>
                Examples of my outstanding fair play attitude, I have
                demonstrated in the College or community are:
              </Typography>
              <Typography variant="h9" color="inherit" paragraph>
                1. As the Intermural & Intramural Sports Lead in our Sports and
                Wellness Department, on a daily basis, I come across my fellow
                students of different nationalities with different attitude &
                temperament. I have always been neutral and fair to all their
                demands and actions. <br />
                2. During one of the final of the cricket matches, I had edged a
                ball that was caught behind; this was not noticed by the Umpire.
                Still I informed the Umpire & walked out as I believe that
                integrity is the most important value one must have. This action
                of mine was highly appreciated by all. <br />
                3. Students Representative Council’s (SRC) Sports and Wellness
                Representative role was my first exposure to leadership roles at
                CNA-Q. I had to be very fair while interacting with my fellow
                students. <br />
              </Typography>
              <Typography variant="h6" gutterBottom>
                I have been successful in the following sport competitions at
                the College or community:
              </Typography>
              <Typography variant="h9" color="inherit" paragraph>
                1. Recipient of CNA-Q’s Male Performance Achievement Award
                2016-’17 & Team of the Year Award in 2015-’16 & 2016-’17 <br />
                2. Plays Cricket in Division C in Qatar Cricket Association
                (QCA) since 2016 till date
                <br />
                3. I‘m the member of CNA-Q Falcon Cricket Team from 2016 to till
                date and QECC from 2017 till date.
                <br />
                4. I was highest Wicket Taker in 2017 & 2018. Won trophies for
                these achievements
                <br />
              </Typography>
              <Typography variant="h6" gutterBottom>
                Examples of my excellent attitude are:
              </Typography>
              <Typography variant="h9" color="inherit" paragraph>
                1. As a member and as a leader, I always kept my cool and been
                good to my team mates & fellow students.
                <br />
                2. Some of fellow team members call me “Captain Cool” comparing
                me with former Indian Cricket Captain Dhoni.
                <br />
                3. I have always been a fair player & leader, listening to
                affected party if single or both sides
                <br />
                if two parties are involved. Then a fair decision is taken. In
                case of doubt I always consulted by Senior faculties for advice.{" "}
                <br />
                4. I always supported and encouraged the junior members of the
                team as my senior members had treated me when I was new.
                <br />
                5. Even if our team losses a match I insist on going and shaking
                hand with players of the opposite team and appreciating their
                effort.
                <br />
              </Typography>
              <Divider />
            </Grid>
            {/* End main content */}
            {/* Sidebar */}

            <Grid item xs={12} md={4}>
              <Paper elevation={0}>
                <Typography variant="h6" gutterBottom>
                  My Paragliding Video
                </Typography>
                <Typography>
                  <YouTube videoId="YuMLO3_Jg-Y" opts={opts} />
                </Typography>
              </Paper>
              <Grid item xs={6} md={4}>
                <GridList
                  cellHeight={180}
                  cols={3}
                  style={{ width: 600, height: 500 }}
                >
                  <GridListTile cols={1}>
                    <img src="/images/Aboutme/2.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Aboutme/3.jpeg" />
                  </GridListTile>
                  {/* <GridListTile cols={3}>
                    <img src="../images/Aboutme/11.jpeg" />
                  </GridListTile> */}
                  <GridListTile cols={1}>
                    <img src="../images/Aboutme/4.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Aboutme/1.jpeg" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/Aboutme/2.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="/images/Aboutme/5.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Aboutme/6.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/Aboutme/7.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/Aboutme/8.jpeg" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/Aboutme/9.jpeg" />
                  </GridListTile>
                  {/* <GridListTile cols={3}>
                    <img src="../images/Aboutme/10.jpeg" />
                  </GridListTile> */}
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
