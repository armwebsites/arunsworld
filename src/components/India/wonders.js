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
  "images/India/landmarks/pics/1.jpg",
  "images/India/landmarks/pics/2.jpg"
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
                <b>7 Wonders of India</b>
              </Typography>
              <Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Place</TableCell>
                      <TableCell>Image</TableCell>
                      <TableCell>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        The Hampi Temple Complex In Karnataka
                      </TableCell>
                      <TableCell>
                        <img
                          src="/images/India/wonders/1.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Hampi is a temple town in India’s Karnataka state dotted
                        with fascinating ancient Hindu temples and shrines.
                        During its peak time, Hampi was one of the wealthiest
                        cities in the world. Hampi was part of the ancient
                        Indian kingdom of Vijayanagara whose rulers were known
                        for their love of arts and culture, thirst for
                        knowledge, and efficient rule. The Virupaksha Temple,
                        the Queen’s Bath, the Vittala Temple Complex are some of
                        the most notable temples and monuments in Hampi. The
                        place inspires the awe of all who visit Hampi and is
                        thus rightly classified as one of the 7 wonders of India
                        and a UNESCO World Heritage Site.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        Khajuraho Group Of Monuments In Madhya Pradesh
                      </TableCell>
                      <TableCell>
                        <img
                          src="/images/India/wonders/2.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        The Khajuraho Group of Monuments is a vast complex of
                        Jain and Hindu Temples, located in Khajuraho in India’s
                        Madhya Pradesh state. The site has been declared as one
                        of India’s UNESCO World Heritage Sites. The Khajuraho
                        temples are known across the world for their erotic
                        sculptures and elegant nagara-style architectural
                        symbols. The Khajuraho temples and other monuments were
                        built between 950 and 1050 by the rulers of the Chandela
                        Dynasty. As per historical records, the site hosted 85
                        temples by the 12th century of which only about 20
                        survive to this date. The profusion of sculptures,
                        intricate details, and symbolic designs all exhibit the
                        great artistic wealth of ancient India. For all these
                        reasons, it is regarded as one of the 7 wonders of
                        India.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>The Konark Sun Temple In Orissa</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/wonders/3.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        The Konark Sun Temple is another one of the 7 wonders of
                        India and is located in Konark, Orissa. The temple was
                        built in 1255 CE by the East Ganga Dynasty ruler, King
                        Narasimhadeva I. The temple is famous for its
                        fascinating architecture and erotic sculptures. The main
                        attraction is the sun-chariot-styled temple with
                        elaborately carved wheels, walls, and pillars. Though a
                        major part is in ruins, what remains is enough to draw
                        the attention of visitors to the Konark Sun Temple. The
                        temple is dedicated to the Sun God. Its architecture and
                        engineering continue to baffle modern architects and
                        engineers.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Taj Mahal In Uttar Pradesh</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/wonders/4.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Perhaps there are only a few people in the world who
                        have not heard about the Taj Mahal, the famous symbol of
                        love. It is an ivory-white mausoleum built by the Mughal
                        Emperor Shah Jahan for his beloved wife Mumtaz Mahal
                        after her demise. The Taj Mahal today is the resting
                        place of both Mumtaz Mahal and Shah Jahan. The tombs are
                        the centerpiece of the 17-hectare complex. The Taj Mahal
                        was probably completely built by 1653. The Taj Mahal, a
                        UNESCO World Heritage Site is today admired by the
                        millions of visitors who visit the site. It is not only
                        one of the 7 wonders of India but also the world.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>The Nalanda University In Bihar</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/wonders/5.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        A large Buddhist monastery and a world-renowned center
                        of learning between the 7th century BCE and 1200 CE,
                        Nalanda well deserves to be one of the 7 wonders of
                        India as well as a UNESCO World Heritage Site. Nalanda
                        is located about 95 km from Patna, the capital city of
                        India’s Bihar state. Nalanda is as one of the most
                        famous universities in ancient India that was inspired
                        by the highly organized methods of Vedic learning. The
                        university flourished during the reign of the Gupta
                        Empire and later during the rule of the emperor of
                        Kannauj, Harshavardhana. Nalanda during its peak time
                        was attended by scholars who came from near and far
                        including knowledge-seekers from China, Korea, Central
                        Asia, and Tibet. Sadly, it the University was ransacked
                        and destroyed by a Muslim army of the Mamluk Dynasty in
                        1200 CE and was eventually abandoned and forgotten. Many
                        years, later, the Government of modern India revived the
                        site, and today it attracts a large number of tourists
                        to the Indian state.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        The Monolithic Gomateshwara Statue In Karnataka
                      </TableCell>
                      <TableCell>
                        <img
                          src="/images/India/wonders/6.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        The Gomateshwara is a giant statue of Bahubali, a
                        revered figure of the Jain community of India. Bahubali
                        was Rishabhanatha's (the first Jain tirthankara) son.
                        Bahubali is said to have attained moksha or salvation by
                        meditating while standing motionless for a year till
                        climbing plants grew around his legs. The giant
                        Gommateshwara statue was thus built in ancient India to
                        show respect to Bahubali. It is a 57-foot monolith that
                        is located on a hilltop in Shravanabelagola in the
                        Indian state of Karnataka. The statue was built by
                        Chavundaraya, a minister and commander of the Ganga
                        Dynasty at about AD 981.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>The Golden Temple In Punjab</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/wonders/7.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        The Golden Temple or the Sri Harmandir Sahib is the
                        holiest pilgrimage site of the Sikhs of the world. The
                        temple is located in the Punjab city of Amritsar and was
                        designed by the fifth Sikh Guru, Guru Arjan. The holy
                        book of the Sikhs known as the Adi Granth was installed
                        inside the Golden Temple. The temple also houses the
                        Akal Takht or the "throne of the timeless one" which is
                        regarded as the physical attribute of God. People of all
                        religions can visit the Golden Temple, lending a
                        universal appeal to this site. The Golden Temple,
                        covered by gold in the upper floors, is visited by over
                        100,000 people daily.
                      </TableCell>
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
                  Top 10 Historical Monuments in India
                </Typography>
                <Typography>
                  <YouTube videoId="nLCL9GOU0MQ" opts={opts} />
                </Typography>
              </Paper>
              <Grid item xs={6} md={4}>
                <GridList
                  cellHeight={180}
                  cols={3}
                  style={{ width: 600, height: 500 }}
                >
                  <GridListTile cols={1}>
                    <img src="/images/India/landmarks/2.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/landmarks/3.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/India/landmarks/4.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/landmarks/1.jpeg" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/India/landmarks/2.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="/images/India/landmarks/5.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/landmarks/6.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/India/landmarks/7.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/landmarks/8.jpeg" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/India/landmarks/9.jpeg" />
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
