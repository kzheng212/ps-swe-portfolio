import { useState } from "react";

export default function StarshipCard({ starship }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      key={starship.url}
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardFlip}
    >
      <div className="card-inner">
        <div className="card-front">
          <h2> {starship.name} </h2>
        </div>
        <div className="card-back">
          <p> Model: {starship.model} </p>
          <p> Manufacturer: {starship.manufacturer} </p>
        </div>
      </div>
    </div>
  );
}
