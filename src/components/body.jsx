import { Row, Col, Container } from "react-bootstrap";
import BG from "../assets/img1.png";
import img from "../assets/img2.png";
import img1 from "../assets/img4.png";
import Medqui from "./medqui";
const Home = () => {
  return (
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
          <Medqui></Medqui>
        </div>
      </Container>
    </div>
  );
};

export default Home;
