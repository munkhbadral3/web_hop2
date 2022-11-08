import { Row, Col, Container } from "react-bootstrap";
import img9 from "../assets/img9.png";
import Card from "react-bootstrap/Card";
const Home = () => {
  return (
    <Container>
      <Card style={{ width: "23rem" }}>
        <img id="s" src={img9} alt="BG" />
        <Card.Body>
          <Card.Title>
            <h3>10 secret tips for managing a team remotely</h3>
          </Card.Title>
          <Card.Text>
            There are times when our work impacts us deeply — sometimes in ways
            we neither acknowledge nor understand
          </Card.Text>
          <div className="column">
            <img id="o" src={img9} alt="BG" />
            <div className="fon8">Leslie Alexander l 2nd January,2022</div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Home;
