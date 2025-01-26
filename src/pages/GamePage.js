import React, { useState, useEffect } from "react";
import Board from "../components/Board";
import { getShuffledEmotions } from "../utils/gameLogic";
import { saveGameResult } from "../utils/storage";

function GamePage({ mode }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);

  useEffect(() => {
    setCards(getShuffledEmotions(mode));
    setFlipped([]);
    setMatched([]);
    setAttempts(0);
    setIsGameWon(false);
  }, [mode]);

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setAttempts((prev) => prev + 1);

      if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
        setMatched((prev) => [...prev, ...newFlipped]);
        setFlipped([]);

        if (matched.length + 2 === cards.length) {
          setIsGameWon(true);
          saveGameResult(mode, attempts + 1);
        }
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div>
      {!isGameWon ? (
        <div>
          <Board
            cards={cards}
            flipped={flipped}
            matched={matched}
            onCardClick={handleCardClick}
          />
          <p style={{ textAlign: "center" }}>Tentatives : {attempts}</p>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>🎉 Félicitations ! Vous avez gagné ! 🎉</h2>
          <p>Mode de jeu : {mode} cartes</p>
          <p>Score : {attempts} tentatives</p>
          <button
            onClick={() => {
              setCards(getShuffledEmotions(mode));
              setFlipped([]);
              setMatched([]);
              setAttempts(0);
              setIsGameWon(false);
            }}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#0056b3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Rejouer
          </button>
        </div>
      )}
    </div>
  );
}

export default GamePage;