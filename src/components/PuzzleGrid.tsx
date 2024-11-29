import React from 'react';

function handleLetterPlacement(row: number, col: number, letter: string) {
  if (grid[row][col] !== '') {
    setMessage('Cell is already filled!');
    return;
  }

  // Show mini-puzzle before allowing placement
  <MiniPuzzle
    onSolve={() => {
      const newGrid = [...grid];
      newGrid[row][col] = letter.toUpperCase();
      setGrid(newGrid);
      setMessage('');
    }}
  />;
}
