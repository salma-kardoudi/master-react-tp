import React from "react";
import Card from "./Card";
import "../styles/Board.css";

function Board({ cards, flipped, matched, onCardClick }) {
  return (
    <div className={`board board--${cards.length}`}>
      {cards.map((emoji, index) => {
        const isVisible = flipped.includes(index) || matched.includes(index);
        const displayEmoji = isVisible ? emoji : "❓";

        return (
          <Card
            key={index}
            emoji={displayEmoji}
            onClick={() => onCardClick(index)}
          />
        );
      })}
    </div>
  );
}

export default Board;