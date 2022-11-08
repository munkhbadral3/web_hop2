import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Log_in from "./components/Log_in";
import Services from "./components/Services";
import Header from "./components/Header";
import Footer from "./components/footer";
export const darkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <darkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Log_in" element={<Log_in />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </darkModeContext.Provider>
  );
}

export default App;
