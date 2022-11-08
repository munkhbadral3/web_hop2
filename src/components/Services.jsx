import { useContext } from "react";
import { Container } from "react-bootstrap";
import { darkModeContext } from "../App";
import Medqui from "./medqui";

const Home = () => {
  const { isDarkMode } = useContext(darkModeContext);

  const styles = {
    box: {
      backgroundColor: isDarkMode ? "black" : "white",
    },
  };
  return (
    <div style={styles.box}>
      <Container>
        <h1>Blog posts</h1>
        <div>Our latest updates and blogs about managing your team</div>
        <div className="column">
          <Medqui></Medqui>
          <Medqui></Medqui>
          <Medqui></Medqui>
        </div>

        <div className="column">
          <Medqui></Medqui>
          <Medqui></Medqui>
          <Medqui></Medqui>
        </div>

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
