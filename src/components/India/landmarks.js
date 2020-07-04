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
                <b>5 Most Famous Historical Monuments of India</b>
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
                      <TableCell>1. Taj Mahal, Agra The-Taj-Mahal</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/landmarks/pics/1.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        The Taj Mahal, a beautiful white marble Monument located
                        in the city of Agra on the banks of the holy river
                        Yamuna in the state of Uttar Pradesh. Taj Mahal is the
                        finest example of combines elements of Mughal,Persian,
                        Ottoman Turkish and Indian architectural styles. It is
                        one of the eight wonders of the world and the jewel of
                        Muslim art in India. Fatehpur Sikri is another historic
                        site in the state, the first planned city of the
                        Mughals.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2. Mysore Palace, Mysore</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/landmarks/pics/2.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Mysore_Palace The Palace of Mysore is the most famous
                        historical monument, located in the city of Mysore in
                        Karnataka and one of the most visited monuments in
                        India. Mysore Palace is one of the most famous tourist
                        attractions in the city along with Chamundi Hills.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3. Harmandir Sahib, Amritsar</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/landmarks/pics/3.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        The Golden Temple is known as Harmandir Sahib is a Sikh
                        Gurdwara located in the Amritsar, Punjab. Shri Darbar
                        Shaib is the holiest shrine and most famous pilgrimage
                        place for Sikhs. Harmandir Sahib is one of the most
                        sacred places in India, a Holy Granth Sahib is always
                        present inside the temple.3
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4. Brihadishwara Temple, Thanjavur</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/landmarks/pics/4.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Brihadishwara Temple also called Periya Koyil or Big
                        Temple is one of the India’s largest temple located in
                        the Thanjavur at the Indian state of Tamil Nadu. The
                        Rajarajeswaram temple is dedicated to Lord Shiva and the
                        best temple build by Cholas along with Airavatesvara
                        Temple. Brihadishwara Temple and Airavatesvara Temple
                        are two World Heritage in Tamil Nadu India.4
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5. Bahai Temple, Delhi</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/landmarks/pics/1.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        The Lotus Temple of Delhi is called Bahai Temples,
                        situated near kalka Ji.Lotus Temple is a house of
                        Worship for every religion and best place for meditation
                        and peace. Bahai Faith is spiritual unity of all
                        humankind, there are eight continental Houses of Worship
                        have been built around the world. Lotus Temple is one of
                        them and the prominent attraction in Delhi.
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
