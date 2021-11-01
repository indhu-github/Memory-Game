import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const cardImages = [
  { src: "/img/apple.jpg" },
  { src: "/img/custard-apple.jpg" },
  { src: "/img/dragon-fruit.jpg" },
  { src: "/img/grapes.jpg" },
  { src: "/img/papaya.jpg" },
  { src: "/img/watermelon.jpg" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // console.log(cards, turns);

  const handleChoice = (card) => {
    // console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("cards match");
        resetTurn();
      } else {
        console.log("cards dont match");
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices and increment turns
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
