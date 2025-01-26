export const EMOTIONS = ["😊", "😂", "😁", "😒", "😎", "😉", "😢", "😜", "😃", "😄", "🥲", "🤔", "🤨", "😣", "🙄", "😴"];

export function getShuffledEmotions(cardCount) {
  const selectedEmojis = EMOTIONS.slice(0, cardCount / 2);
  const duplicatedEmojis = [...selectedEmojis, ...selectedEmojis];
  return duplicatedEmojis.sort(() => Math.random() - 0.5);
}