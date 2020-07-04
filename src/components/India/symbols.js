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
const fadeImages = ["images/India/symbols/1.png", "images/India/symbols/4.jpg"];
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
                <b>National symbols of India</b>
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                <img
                  src="/images/India/symbols/p1.png"
                  style={{ width: 200, float: "right" }}
                />
                The Republic of India has several official national symbols
                including a historical document, a flag, an emblem, an anthem, a
                memorial tower as well as several national heroes. All the
                symbols were picked up at various times. The design of the
                national flag was officially adopted by the Constituent
                Assemblyman just before independence, on the 22nd of July in
                1947.[1] There are also several other symbols including the
                national animal, bird, flower, fruit and tree and game.[2]
              </Typography>

              <Typography variant="h6" color="inherit" paragraph>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Symbol</TableCell>
                      <TableCell>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Tiranga</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/symbols/1.png"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        A horizontal rectangular tricolour with equally sized
                        deep saffron at the top, white in the middle and India
                        green at the bottom. In the center is a navy blue wheel
                        with twenty-four spokes, known as the Ashoka Chakra. The
                        flag is based on the Swaraj flag designed by Pingali
                        Venkayya.[1]
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>National Emblem of India</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/symbols/2.png"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        An adaptation of Lion Capital of Ashoka at Sarnath was
                        adopted as the National Emblem of India on 26 January
                        1950, the day India became a republic. Forming an
                        integral part of the emblem is the motto inscribed below
                        the abacus in Devanagari script: "Satyameva jayate"
                        (English: Truth Alone Triumphs), a quote taken from
                        Mundaka Upanishad, the concluding part of the sacred
                        Hindu Vedas.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>National anthem Jana Gana Mana</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/symbols/3.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Jana Gana Mana by Rabindranath Tagore was officially
                        adopted by the Constituent Assembly as the Indian
                        national anthem on 24 January 1950.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>National fruit Manago</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/symbols/4.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Mango (Mangifera indica) originated in India and the
                        country is home to more than 100 varieties of the fruit.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>National river Ganga</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/symbols/5.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Ganga is the longest river of India with the most
                        heavily populated river basin in the world. The river is
                        revered by Hindus as the most sacred river on earth.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>National flower Lotus</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/symbols/6.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Lotus (Nelumbo Nucifera Gaertn) is the National Flower
                        of India. It is a sacred flower and occupies a unique
                        position in the art and mythology of ancient India and
                        has been an auspicious symbol of Indian culture since
                        time immemorial. India is rich in flora. Currently
                        available data place India in the tenth position in the
                        world and fourth in Asia in plant diversity. From about
                        70 per cent geographical area surveyed so far, 47,000
                        species of plants have been described by the Botanical
                        Survey of India (BSI).
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>National tree Indian banyan</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/symbols/7.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Indian banyan (Ficus bengalensis) root themselves to
                        form new trees and grow over large areas. Because of
                        this characteristic and its longevity, this tree is
                        considered immortal and is an integral part of the myths
                        and legends of India.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>National animal Royal Bengal tiger</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/symbols/8.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        The Bengal tiger (Panthera tigris tigris) is found only
                        in the Indian subcontinent and can be found in most
                        regions of the country.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        National aquatic animal Ganges river dolphin
                      </TableCell>
                      <TableCell>
                        <img
                          src="/images/India/symbols/9.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        The river dolphin is a freshwater or river dolphin found
                        in the Indian subcontinent which is split into two
                        subspecies, the Ganges river dolphin and the Indus river
                        dolphin. The Ganges river dolphin has a sturdy, yet
                        flexible, body with large flippers and a low triangular
                        dorsal fin. It weighs up to 150kg. The calves are
                        chocolate brown at birth and become grayish brown in
                        adulthood with a smooth and hairless skin. Females are
                        larger than males. It can only survive in pure and fresh
                        water.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>National bird Indian peacock</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/symbols/10.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Indian peacock (Pavo cristatus) is designated as the
                        national bird of India. A bird indigenous to the
                        subcontinent, peacock represents the unity of vivid
                        colours and finds references in Indian culture.[13] On
                        February 1, 1963, The Government of India have decided
                        to have the Peacock as the national bird of India. The
                        decision has been taken after considering the views of
                        the State Governments and the opinions expressed in the
                        Press. The question of selecting a national bird has
                        been under consideration since the Tokyo conference of
                        the International Council for Bird Preservation held in
                        May 1960. This matter was taken up by the Indian Board
                        for Wild Life and the State Governments were also asked
                        to give their views. Some of the other birds considered
                        for the honour were the Great Indian Bustard, the Sarus
                        crane, the "Garuda" and the Swan (Hamsa), the strongest
                        contender being the Great Indian Bustard.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>National currency Indian rupee</TableCell>
                      <TableCell>
                        <img
                          src="/images/India/symbols/11.png"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Indian rupee (ISO code: INR) is the official currency of
                        the Republic of India. The issuance of the currency is
                        controlled by the Reserve Bank of India. The Indian
                        rupee symbol is derived from the Devanagari consonant
                        "र" (ra) and the Latin letter "R" was adopted in
                        2010.[15]Udaya Kumar Dharmalingam born 10 October 1978
                        in Kallakurichi, Tamil Nadu is the designer of the
                        Indian rupee sign. His design was selected from among
                        five short listed symbols. According to Udaya Kumar the
                        design is based on the Indian tricolour. He is an
                        assistant professor at IIT Guwahati.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        National microbe Lactobacillus delbrueckii subsp.
                        bulgaricus
                      </TableCell>
                      <TableCell>
                        <img
                          src="/images/India/symbols/12.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Lactobacillus delbrueckii (subsp. bulgaricus) has been
                        announced as the National Microbe for India by Jayanthi
                        Natarajan, India's Minister of State for Environment and
                        Forests on October 18, 2012 during the International
                        Conference on "Biodiversity Conservation and Education
                        for Sustainable Development - Learning to Conserve
                        Biodiversity in a Rapidly Changing World" held at
                        Hyderabad during CoP-11. The microbe was selected by
                        children who had visited the Science Express
                        Biodiversity Special, a train which has been visiting
                        various stations across the country.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>National reptile King cobra </TableCell>
                      <TableCell>
                        <img
                          src="/images/India/symbols/13.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        King cobra is the national reptile of India. It is
                        consider a sacred animal in Indian culture. They are
                        found almost every part of Indian subcontinent.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        National heritage animal Indian elephant{" "}
                      </TableCell>
                      <TableCell>
                        <img
                          src="/images/India/symbols/14.jpg"
                          style={{ width: 200 }}
                        />
                      </TableCell>
                      <TableCell>
                        Indian elephant is the national heritage animal of India
                        since October 22, 2010. India's Environment Ministry has
                        declared the elephant a National Heritage Animal in
                        order to increase protective measures for the country's
                        nearly 29,000 elephants."Declaring it the National
                        Heritage Animal will give it due place as emblem of
                        ecological sensitivity. It will also mark recognition
                        for its centrality in our plural cultures, traditions
                        and oral lore," the task force wrote in its report
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
                  Symbols of India
                </Typography>
                <Typography>
                  <YouTube videoId="bhAeQyLJaRU" opts={opts} />
                </Typography>
              </Paper>
              <Grid item xs={6} md={4}>
                <GridList
                  cellHeight={180}
                  cols={3}
                  style={{ width: 600, height: 500 }}
                >
                  <GridListTile cols={1}>
                    <img src="/images/India/symbols/2.png" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/symbols/3.jpg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/India/symbols/4.jpg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/symbols/1.png" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/India/symbols/2.png" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="/images/India/symbols/5.jpg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/symbols/6.jpg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/India/symbols/7.jpg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/symbols/8.jpg" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/India/symbols/9.jpg" />
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
