import { Row, Col, Container } from "react-bootstrap";
const Home = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col sm={3} className="logo">
            Team
          </Col>
          <Col sm={1}>Use</Col>
          <Col sm={2}> Explore</Col>
          <Col sm={3}> REsources</Col>
          <Col sm={3}>
            <h5>Subscribe to our newsletter</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>instagram</Col>
          <Col sm={1}>UI Design</Col>
          <Col sm={2}>Figma</Col>
          <Col sm={3}>Community Resources Hub</Col>
          <input type="text" placeholder="Email" className="input" />
        </Row>
        <Row>
          <Col sm={3}>Facebook</Col>
          <Col sm={1}>UI Design</Col>
          <Col sm={2}>Customers</Col>
          <Col sm={3}>Support</Col>
        </Row>
        <Row>
          <Col sm={3}>Twitter</Col>
          <Col sm={1}>UI Design</Col>
          <Col sm={2}>Why I Love Figma</Col>
          <Col sm={3}>education</Col>
        </Row>
        <Row>
          <Col sm={3}>instagram</Col>
          <Col sm={1}>UI Design</Col>
          <Col sm={2}>Figma</Col>
          <Col sm={3}>Community Resources Hub</Col>
          <Col sm={3}></Col>
        </Row>
        <Row>
          <Col sm={3}>Facebook</Col>
          <Col sm={1}>UI Design</Col>
          <Col sm={2}>Customers</Col>
          <Col sm={3}>Support</Col>
        </Row>
        <Row>
          <Col sm={3}>Twitter</Col>
          <Col sm={1}>UI Design</Col>
          <Col sm={2}>Why I Love Figma</Col>
          <Col sm={3}>Education</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
