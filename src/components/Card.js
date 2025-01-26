import React from "react";
import "../styles/Card.css";

function Card({ emoji, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {emoji}
    </div>
  );
}

export default Card;