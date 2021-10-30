import {useState} from "react";
import "./App.css";

const cardImages=[
  {"src":"/img/apple.jpg"},
  {"src":"/img/custard-apple.jpg"},
  {"src":"/img/dragon-fruit.jpg"},
  {"src":"/img/grapes.jpg"},
  {"src":"/img/papaya.jpg"},
  {"src":"/img/watermelon.jpg"},
  ]

function App() {
const [cards,setCards]=useState([]);
const [turns,setTurns]=useState([]);

//shuffle cards
const shuffleCards=()=>{
  const shuffledCards=[...cardImages,...cardImages]
  .sort(()=>Math.random()-0.5)
  .map((card)=>({...card,id:Math.random()}))

  setCards(shuffledCards);
  setTurns(0);
}

console.log(cards,turns);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
