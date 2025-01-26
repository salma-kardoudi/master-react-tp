import React from "react";
import "../styles/Settings.css";

function Settings({ mode, setMode, background, setBackground }) {
  return (
    <div className="settings">
      <label>
        Mode :
        <select value={mode} onChange={(e) => setMode(parseInt(e.target.value))}>
          <option value={4}>4 cartes</option>
          <option value={16}>16 cartes</option>
          <option value={32}>32 cartes</option>
        </select>
      </label>
      <label>
        Couleur de fond :
        <select value={background} onChange={(e) => setBackground(e.target.value)}>
          <option value="#ffffff">Blanc</option>
          <option value="#f0f8ff">Bleu ciel</option>
        </select>
      </label>
    </div>
  );
}

export default Settings;