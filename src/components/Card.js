import "./Card.css";

export default function Card({ card }) {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="front card" />
        <img className="back" src="/img/cover.jpg" alt="back card" />
      </div>
    </div>
  );
}
