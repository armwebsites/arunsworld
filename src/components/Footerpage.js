import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import Button from "@material-ui/core/Button";
import ReactAudioPlayer from "react-audio-player";
import Games from "./Game/Game";
class FooterPage extends React.Component {
  state = {
    gameflag: true,
    flag: false
  };
  handlestate = () => {
    {
      this.setState({ flag: !this.state.flag });
    }
  };
  reset = () => {
    {
      this.setState({ gameflag: !this.state.gameflag });
    }
  };
  render() {
    return (
      <Footer color="grey" className="font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="4">
              <h5 className="title">Indian National Anthem </h5>
              <p>
                The copy of the letter can be found in his autobiography and
                Jana Gana Mana (hymn) . "Jana Gana Mana" was officially adopted
                <br />
                by the Constituent Assembly as the Indian national anthem on 24
                January 1950. The original poem written by Rabindranath Tagore
                was translated into Hindi-Urdu by Abid Ali.
              </p>
              <Button color="primary" onClick={this.handlestate}>
                Play/pause
              </Button>
              {!this.state.flag ? null : (
                <ReactAudioPlayer src="music.mp3" autoPlay controls />
              )}
            </Col>
            <Col md="4">
              <ul>
                <h5 className="title">Lets Play TIC-TAC </h5>
                {this.state.gameflag ? (
                  <li>
                    <Games />
                  </li>
                ) : (
                  <Games />
                )}

                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.reset}
                >
                  Reset
                </Button>
              </ul>
            </Col>
            <Col md="4">
              <h5 className="title">Site Map</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="/">Home</a>
                </li>

                <li className="list-unstyled">
                  <a href="/Aboutus">About Me</a>
                </li>
                <li className="list-unstyled">
                  <a href="/Hobbies">My Hobbies</a>
                </li>
                <ul>
                  <li className="list-unstyled">
                    <a href="/cricket">Cricket</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/Reading">Reading</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/Netflix">Watching TV Shows</a>
                  </li>
                </ul>
                <li className="list-unstyled">
                  <a href="/India">My Country</a>
                </li>
                <ul>
                  <li className="list-unstyled">
                    <a href="/History">Indian History</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/Maps">Indian Maps</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/Symbols">Indian Symbols</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/Landmarks">Indian Landmarks</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/Economics">Indian Economics</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/Wonders">Indian Wonders</a>
                  </li>
                </ul>
                <li className="list-unstyled">
                  <a href="/Refernces">Refernces</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <p> Arun Raghavan Menon </p>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
