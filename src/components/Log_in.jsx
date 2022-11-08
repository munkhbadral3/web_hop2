import img3 from "../assets/img3.jpg";
import BG from "../assets/img1.png";
import img from "../assets/img2.png";
import img1 from "../assets/img4.png";
import Medqui from "./medqui";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { useContext } from "react";
import { darkModeContext } from "../App";
const Home = () => {
  const { isDarkMode } = useContext(darkModeContext);

  const styles = {
    box: {
      backgroundColor: isDarkMode ? "black" : "white",
      color: isDarkMode ? "white" : "black",
    },
  };

  return (
    <>
      <div style={styles.box}>
        <div className="abc" style={{ backgroundImage: `url(${img3})` }}>
          <Container>
            <Row>
              <Col className="body">
                <Col className="logo">Team.</Col>
                <div className="border1">
                  <div className="text1">
                    Instant collaborations <br />
                    for remote teams
                  </div>
                  <div className="text2">
                    All in one for your remote team chats, <br />
                    collaboration and track projects
                  </div>
                  <div>
                    <input type="text" placeholder="Email" className="input" />
                    <button className="button">Get early access</button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row>
              <Col className="body1">
                <h1>
                  Your Hub for
                  <br /> teamwork
                </h1>
                <div>
                  Give everyone you work with—inside and outside your <br />
                  company—a more productive way to stay in sync. <br />
                  Respond faster with emoji, keep conversations focused <br />
                  in channels, and simplify all your communication into
                  <br />
                  one place.
                </div>
              </Col>
              <Col>
                <img id="s" src={BG} alt="BG" />
              </Col>
            </Row>
            <Row>
              <Col>
                <img id="s" src={img} alt="BG" />
              </Col>
              <Col className="body1">
                <h1>
                  Simple task <br />
                  management
                </h1>
                <div>
                  Give everyone you work with—inside and outside your <br />
                  company—a more productive way to stay in sync. <br />
                  Respond faster with emoji, keep conversations focused <br />
                  in channels, and simplify all your communication into
                  <br />
                  one place.
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="body1">
                <h1>
                  Scheduling that
                  <br />
                  actually works
                </h1>
                <div>
                  Give everyone you work with—inside and outside your <br />
                  company—a more productive way to stay in sync. <br />
                  Respond faster with emoji, keep conversations focused <br />
                  in channels, and simplify all your communication into
                  <br />
                  one place.
                </div>
              </Col>
              <Col>
                <img id="s" src={img1} alt="BG" />
              </Col>
            </Row>
            <h1 className="a">What people say about us</h1>
            <div className="column">
              <Medqui></Medqui>
              <Medqui></Medqui>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
