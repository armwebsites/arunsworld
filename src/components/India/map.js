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
  "images/India/Category/maps.jpg",
  "images/India/Category/maps.jpg"
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
                <b>History Map of India</b>
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Time Period</TableCell>
                      <TableCell>Image</TableCell>
                      <TableCell>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Indian Freedom Struggle</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/map/2.png"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Foreign invaders had always been keen to come to India
                        from the ancient time, be it the Aryans, the Persians,
                        Iranians, Parsis, Mughals, Chengis Khan: the Mongolian,
                        or the great Alexander. India always has a cultural
                        richness and prosperity which developed a keen interest
                        in the invaders and rulers. After the Battle of Plassey
                        1757, the British won political power over India and
                        this is when they came and ruled the country for almost
                        200 years. In 1848, during the tenure of Lord Dalhousie,
                        their rule began to establish. North-west India was one
                        of the initial targets of the British and by 1856 they
                        had developed a firm authority. It was in the nineteenth
                        century when the British rules gained its major heights.
                        Due to the discontent and dissatisfied local rulers,
                        peasants and the soldiers who were unemployed by then
                        broke out into a revolt, commonly known as the "revolt
                        of 1857" or the "mutiny of 1857".
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ancient Indian Map</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/map/3.png"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>No Data</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ancient Kalinga</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/map/4.png"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        The ancient territorial subdivision of east-central
                        India, Kalinga corresponded to various states which
                        were: the present day northern Andhra Pradesh, almost
                        the whole of Orissa and also a little portion of Madhya
                        Pradesh . Kalinga strictly stretched not even a little
                        farther than the south of the Godavari River thereby
                        excluding the territory of Andhra which lied between
                        Godavari and Krishna, then known as Vengi. Semi-Hindu
                        tribes were the inhabitants of the hinterland of Kalinga
                        which was led through the thickly forested and
                        mountaneous country of the central India and the
                        Indo-Gangetic Plain's. Kalinga was the host to a rich
                        seaborne trade with Myanmar (then Burma) and also with
                        farther south and east areas. This rich sea trade was
                        possible due to the ports of Kakinada, Vishakhapatnam,
                        Chicacole, and Ganjam and the important cities of
                        Rajahmundry and Vizianagaram. It was first conquered by
                        the founder of the Nanda Dynasty (c.343 - c.321BCE),
                        Mahapadma of Magadha. Later the Magadhan Empire
                        succeeded Kalinga a little later after the fall of the
                        Nanda dynasty. But no later the Mauryan king Ashoka
                        recaptured and took over Kalinga's throne in the 3rd
                        century BCE. Ashoka conquered Kalinga after the
                        unpopular Kalinga war which is believed to be a terrible
                        war and which saw a lot of bloodshed and chaos. It is
                        said that it was after this war that King Ashoka
                        converted to Buddhism after witnessing so much of
                        bloodshed and destruction. It was in 261BCE when the
                        historical Kailnga war was fought which proved to be a
                        turning point for the Mauryan emperor Asoka and made him
                        embrace non-violence and the teachings of Buddha. This
                        war had witnessed the maximum bloodshed and furious
                        kiling. The military campaign of Ashoka against Kalinga
                        was one of the bloodiest in Mauryan history. On account
                        of his army's unexpected bravery, Emperor Asoka issued
                        two edicts specifically calling for a just and benign
                        administration in Kalinga. However the south of Orissa
                        remained unconquered by this Mauryan Emperor. Eventually
                        it was Ashoka who began spreading Buddhism and Buddhist
                        philosophy all over Asia.{" "}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Pre-Partition Map of India</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/map/1.png"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Towards the end of 327BCE, Alexander the Great attacked
                        and invaded the valley of Kabul and within few months
                        after this invasion he conquered Taxila, defeating the
                        King Porus from where he reached the eastern border of
                        Punjab. Alexander had greater plans and he wanted to
                        capture Magadha in the lower Ganges valley but since his
                        troops of soldiers refused to go any further he was
                        refused to so south. In 325BCE he left the place which
                        is now Karachi. Though his conquests had been
                        spectacular, Alexander never conquered India. Not even
                        Punjab and Indus valley completely came under his
                        possessions. Alexander died in 323BCE but before his
                        death he deployed his troops west of Indus. This
                        invasion had completely changed the history of India. A
                        young man in Taxila thought that what a European could
                        do, an Indian could do far better and began to train an
                        army. This man took over the control of Magadha. He was
                        none other than Chandragupta Maurya. This is where the
                        Mauryan Empire began to develop.
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
                  History of Indian Map
                </Typography>
                <Typography>
                  <YouTube videoId="QN41DJLQmPk" opts={opts} />
                </Typography>
              </Paper>
              <Grid item xs={6} md={4}>
                <GridList
                  cellHeight={180}
                  cols={3}
                  style={{ width: 600, height: 500 }}
                >
                  <GridListTile cols={1}>
                    <img src="/images/India/map/2.png" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/map/3.png" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/India/map/4.png" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/map/1.png" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/map/3.png" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/India/map/2.png" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/India/map/1.png" />
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
