import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from "./pages/GamePage";
import SettingsPage from "./pages/SettingsPage";
import HistoryPage from "./pages/HistoryPage";
import Menu from "./components/Menu";
import "./styles/App.css";

function App() {
  const [mode, setMode] = useState(4);
  const [background, setBackground] = useState("#ffffff");

  return (
    <Router>
      <div className="app-layout">
        <Menu />
        <div className="main-content" style={{ backgroundColor: background }}>
          <header className="header">
            <h1>Jeu de Memory</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<GamePage mode={mode} background={background} />} />
              <Route
                path="/parametres"
                element={<SettingsPage mode={mode} setMode={setMode} background={background} setBackground={setBackground} />}
              />
              <Route path="/historique" element={<HistoryPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;