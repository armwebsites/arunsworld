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
  "images/India/economics/1.jpg",
  "images/India/economics/2.jpeg"
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
                <b>Economy of India</b>
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                <img
                  src="/images/India/economics/1.jpg"
                  style={{ width: 500, float: "right" }}
                />
                The economy of India is a developing mixed economy.[34] It is
                the world's sixth-largest economy by nominal GDP and the
                third-largest by purchasing power parity (PPP). The country
                ranks 139th in per capita GDP (nominal) with $2,134 and 122nd in
                per capita GDP (PPP) with $7,783 as of 2018.[35][36] After the
                1991 economic liberalisation, India achieved 6-7% average GDP
                growth annually. Since 2014 with the exception of 2017, India's
                economy has been the world's fastest growing major economy,
                surpassing China.[37] The long-term growth prospective of the
                Indian economy is positive due to its young population,
                corresponding low dependency ratio, healthy savings[38] and
                investment rates, and increasing integration into the global
                economy.[39] India topped the World Bank's growth outlook for
                the first time in fiscal year 2015–16, during which the economy
                grew 7.6%.[40] Despite previous reforms, economic growth is
                still significantly slowed by bureaucracy, poor infrastructure,
                and inflexible labor laws (especially the inability to lay off
                workers in a business slowdown).[41] India has one of the
                fastest growing service sectors in the world with an annual
                growth rate above 9% since 2001, which contributed to 57% of GDP
                in 2012–13.[42] India has become a major exporter of IT
                services, Business Process Outsourcing (BPO) services, and
                software services with $154 billion revenue in FY 2017.[43][42]
                This is the fastest-growing part of the economy.[44] The IT
                industry continues to be the largest private-sector employer in
                India.[45][46] India is the third-largest start-up hub in the
                world with over 3,100 technology start-ups in 2014–15.[47] The
                agricultural sector is the largest employer in India's economy
                but contributes to a declining share of its GDP (17% in
                2013–14). India ranks second worldwide in farm output.[48] The
                industry (manufacturing) sector has held a steady share of its
                economic contribution (26% of GDP in 2013–14).[49] The Indian
                automobile industry is one of the largest in the world with an
                annual production of 21.48 million vehicles (mostly two and
                three-wheelers) in 2013–14.[50] India had $600 billion worth of
                retail market in 2015 and one of world's fastest growing
                e-commerce markets.[51][52]
              </Typography>
            </Grid>
            {/* End main content */}
            {/* Sidebar */}

            <Grid item xs={12} md={4}>
              <Paper elevation={0}>
                <Typography variant="h6" gutterBottom>
                  Economic of India
                </Typography>
                <Typography>
                  <YouTube videoId="CnF_M050g4o" opts={opts} />
                </Typography>
              </Paper>
              <Grid item xs={6} md={4}>
                <GridList
                  cellHeight={180}
                  cols={3}
                  style={{ width: 600, height: 500 }}
                >
                  <GridListTile cols={1}>
                    <img src="/images/India/economics/2.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/economics/3.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/India/economics/4.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/economics/1.jpg" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/India/economics/2.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="/images/India/economics/5.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/economics/6.jpeg" />
                  </GridListTile>
                  <GridListTile cols={1}>
                    <img src="../images/India/economics/7.jpeg" />
                  </GridListTile>
                  <GridListTile cols={2}>
                    <img src="../images/India/economics/4.jpeg" />
                  </GridListTile>
                  <GridListTile cols={3}>
                    <img src="../images/India/economics/5.jpeg" />
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
