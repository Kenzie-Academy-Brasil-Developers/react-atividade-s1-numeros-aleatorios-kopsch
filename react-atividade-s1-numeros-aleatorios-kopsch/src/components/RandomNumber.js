import { useState } from "react";
import "./styles.css";

const RandomNumber = () => {
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  const generateRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="container">
      <h2 className="title-page">Gere aqui seu número</h2>
      <span className="random-number">Número: {randomNum}</span>
      <button className="button-generate" onClick={generateRandomNum}>
        Gerar número aleatório
      </button>
    </div>
  );
};

export default RandomNumber;
