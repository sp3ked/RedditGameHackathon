import React, { useState } from 'react';

const puzzles = [
  { question: 'Unscramble: LRAEETT', answer: 'LETTER' },
  { question: 'Find the hidden word: ABCDEFGHIJKLMNOP', answer: 'HI' },
  { question: 'What’s the first letter of the alphabet?', answer: 'A' },
];

function MiniPuzzle({ onSolve }: { onSolve: () => void }) {
  const [currentPuzzle, setCurrentPuzzle] = useState(puzzles[Math.floor(Math.random() * puzzles.length)]);
  const [input, setInput] = useState('');

  function checkAnswer() {
    if (input.toUpperCase() === currentPuzzle.answer) {
      setInput('');
      setCurrentPuzzle(puzzles[Math.floor(Math.random() * puzzles.length)]); // Load a new puzzle
      onSolve(); // Notify parent component
    } else {
      alert('Incorrect! Try again.');
    }
  }

  return (
    <div className="flex flex-col items-center mb-4">
      <p className="text-lg font-bold">{currentPuzzle.question}</p>
      <input
        className="border p-2 mt-2"
        placeholder="Your answer"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={checkAnswer}>
        Submit
      </button>
    </div>
  );
}

export default MiniPuzzle;
