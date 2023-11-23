import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 mb-4">
            <AboutUs />
          </div>
          <div className="col-md-6 mb-4">
            <Menu />
          </div>
          <div>
            <Login />
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default App;
