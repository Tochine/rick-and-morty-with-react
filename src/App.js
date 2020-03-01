import React from "react";
import "./components/styles/Styles.css";
import Characters from "./components/characters/Characters";
import Header from "./components/header/Header";
import Character from "./components/character/Character";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Route path="/" component={Characters} />
        <Route path="/character/:characterId" component={Character} />
      </Router>
    </>
  );
}

export default App;
