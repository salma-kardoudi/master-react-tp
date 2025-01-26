export function saveGameResult(score, time) {
  const history = JSON.parse(localStorage.getItem("gameHistory")) || [];
  history.push({ score, time, date: new Date() });
  localStorage.setItem("gameHistory", JSON.stringify(history));
}

export function getGameHistory() {
  return JSON.parse(localStorage.getItem("gameHistory")) || [];
}

export function clearGameHistory() {
  localStorage.removeItem("gameHistory");
}
