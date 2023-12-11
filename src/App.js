import { Button } from '@mui/material';
import './App.css';
import Field from './field';
import React, { useState } from 'react';


function App() {
  const columns = 7;
  const rows = 6;

  const [turnPlayerOne, setTurnPlayerOne] = useState(true);

  const [board, setBoard] = useState(() => {
    const initialBoard = Array.from({ length: columns }, () => Array(rows).fill(0));
    return initialBoard;
  });

  const handleButtonClick = (index) => {
    const column = board[index];
    

    const lastIndex = column.lastIndexOf(0);
    if (lastIndex == -1) return

    column[lastIndex] = turnPlayerOne ? 1 : 2;
    // Update the board state with the modified column
    const updatedBoard = [...board];
    updatedBoard[index] = column;

    setBoard(updatedBoard);
    setTurnPlayerOne(!turnPlayerOne);
  };

  return (
    <div className="App">
      <h1>Vier Gewinnt !!!</h1>
      
      {board.map((column, index) => (
        <div key={index} className="column">
          <Button variant="contained" onClick={() => handleButtonClick(index)}>lol</Button>
          {column.map((field, index) => (
            <Field key={index} content={field}/>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
