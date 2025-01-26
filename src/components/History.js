import React, { useState } from "react";
import { getGameHistory, clearGameHistory } from "../utils/storage";
import "../styles/History.css";

function History() {
  const [history, setHistory] = useState(getGameHistory());

  const handleClearHistory = () => {
    clearGameHistory();
    setHistory([]);
  };

  return (
    <div className="history">
      <h2>Historique</h2>
      {history.length > 0 ? (
        <div>
          <ul>
            {history.map((game, index) => (
              <li key={index}>
                Score: {game.score}, Temps: {game.time}s, Date:{" "}
                {new Date(game.date).toLocaleString()}
              </li>
            ))}
          </ul>
          <button className="clear-history-btn" onClick={handleClearHistory}>
            Supprimer l'historique
          </button>
        </div>
      ) : (
        <p>Aucun historique disponible.</p>
      )}
    </div>
  );
}

export default History;