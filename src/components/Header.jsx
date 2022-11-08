import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useContext } from "react";
import { darkModeContext } from "../App";

const Header = () => {
  const { setIsDarkMode } = useContext(darkModeContext);

  return (
    <div className="a">
      <Link to="/Log_in">home</Link>
      <Link to="/Products">Products</Link>
      <Link to="/Services">Services</Link>
      <Form>
        <Form.Check
          onChange={(e) => setIsDarkMode(e.target.checked)}
          type="switch"
          id="custom-switch"
          label="dark mode"
        />
      </Form>
    </div>
  );
};

export default Header;
