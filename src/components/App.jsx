import "../styles/App.scss";
import Header from "./Header";
import Grogu from "./Grogu";
import Dice from "./Dice";
import Board from "./Board";
import { useState } from "react";

function App() {
  const [galleta, setGalleta] = useState("");
  const [huevo, setHuevo] = useState("");
  const [rana, setRana] = useState("");
  // const galletas = [1, 2, 3];

  function rollDice() {
    function getRandomNumber(max) {
      return Math.ceil(Math.random() * max);
    }

    const dado = getRandomNumber(4);

    if (dado === 4) {
      console.log("Grogu ha avanzado una casilla");
    } else if (dado === 1) {
      console.log("Se ha almacenado una galleta");
    } else if (dado === 2) {
      console.log("Se ha almacenado un huevo");
    } else if (dado === 3) {
      console.log("Se ha almacenado una rana");
    }
  }

  const handleClick = () => {};

  return (
    <div className="page">
      <Header />
      <main className="page">
        <Grogu handleClick={handleClick} />
        <Dice />
        <Board />
      </main>
    </div>
  );
}

export default App;
