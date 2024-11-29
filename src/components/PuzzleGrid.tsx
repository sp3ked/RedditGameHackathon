import React, { useState } from 'react';
import { getRandomLetter, isValidWord } from './Utils';

function PuzzleGrid() {
  const [grid, setGrid] = useState(Array(5).fill(Array(5).fill('')));
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);

  async function handleLetterPlacement(row: number, col: number, letter: string) {
    if (grid[row][col] !== '') {
      setMessage('Cell is already filled!');
      return;
    }

    // Validate the word formed by placing this letter
    const newGrid = [...grid];
    newGrid[row][col] = letter.toUpperCase();
    setGrid(newGrid);

    const word = extractWord(newGrid, row, col); // Example word extraction function
    if (await isValidWord(word)) {
      setScore((prev) => prev + word.length); // Add points for word length
      setMessage(`Great! You formed the word: ${word}`);
    } else {
      setMessage(`Invalid word: ${word}`);
    }
  }

  function extractWord(grid: string[][], row: number, col: number): string {
    // Extract words horizontally or vertically (simplified example)
    return grid[row].join('').trim();
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-5 gap-1">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-10 h-10 border border-gray-400 flex items-center justify-center bg-white"
            >
              {cell || (
                <button
                  className="text-blue-500"
                  onClick={() => handleLetterPlacement(rowIndex, colIndex, getRandomLetter())}
                >
                  +
                </button>
              )}
            </div>
          ))
        )}
      </div>
      <p className="text-green-500 mt-2">Score: {score}</p>
      {message && <p className="text-red-500 mt-2">{message}</p>}
    </div>
  );
}

export default PuzzleGrid;
