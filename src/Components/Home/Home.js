import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Myportfolio from "../Myportfolio/Myportfolio";
import Contact from '../Contact/Contact'
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";

function Home() {
  return (
    <div className="my-5">
      <Navigation></Navigation>
      <Header></Header>
      <AboutMe></AboutMe>
      <Myportfolio></Myportfolio>
      <Contact></Contact>
    </div>
  );
}

export default Home;
