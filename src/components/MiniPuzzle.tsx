import { useState } from '@devvit/public-api';

const puzzles = [
  { question: 'Unscramble: LRAEETT', answer: 'LETTER' },
  { question: 'Find the hidden word: ABCDEFGHIJKLMNOP', answer: 'HI' },
];

export default function MiniPuzzle({ onSolve }: { onSolve: () => void }) {
  const [currentPuzzle, setCurrentPuzzle] = useState(puzzles[Math.floor(Math.random() * puzzles.length)]);
  const [input, setInput] = useState('');

  function checkAnswer() {
    if (input.toUpperCase() === currentPuzzle.answer) {
      onSolve();
    } else {
      alert('Incorrect! Try again.');
    }
  }

  return (
    <div className="flex flex-col items-center">
      <p>{currentPuzzle.question}</p>
      <input
        className="border p-2 mt-2"
        placeholder="Your answer"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 mt-2" onClick={checkAnswer}>
        Submit
      </button>
    </div>
  );
}
