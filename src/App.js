import React from "react";
import '../src/css/index.css';
import Header from "./components/Header";
import About from "./components/About";
import Noemi from "./components/Noemi";
import InkHouse from "./components/InkHouse";
import Simple from "./components/Simple";
import Game from "./components/Game";
import Netocoin from "./components/Netocoin";
import Other from "./components/Other";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Noemi />
      <InkHouse />
      <Simple />
      <Game />
      <Netocoin />
      <Other />
      <Footer />
    </div>
  );
}

export default App;
