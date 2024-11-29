import axios from 'axios';

// Validate a word using an external dictionary API
export async function isValidWord(word: string): Promise<boolean> {
  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return response.status === 200;
  } catch {
    return false; // Word is not valid
  }
}

// Generate a random letter for the puzzle
export function getRandomLetter(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)];
}
