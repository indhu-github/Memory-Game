import "./Card.css";

export default function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    !disabled && handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="front card" />
        <img
          className="back"
          src="img/cover.jpg"
          alt="back card"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
