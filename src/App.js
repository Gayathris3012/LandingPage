import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <AboutUs />
      <Menu />
    </div>
  );
};

export default App;
