import axios from 'axios';

export async function isValidWord(word: string): Promise<boolean> {
  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return response.status === 200;
  } catch {
    return false; // Word not valid
  }
}
