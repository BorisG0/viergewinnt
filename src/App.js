import { Button } from '@mui/material';
import './App.css';
import Field from './field';
import React, { useState } from 'react';


function App() {
  const columns = 7;
  const rows = 6;
  const win = 4;

  const [turnPlayerOne, setTurnPlayerOne] = useState(true);
  const [won, setWon] = useState(false);

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
    
    if(checkWin() != 0){
      setWon(true);
      return
    }
    setTurnPlayerOne(!turnPlayerOne);
  };

  const setField = (column, row, value) => {
    const updatedBoard = [...board];
    updatedBoard[column][row] = value;
    setBoard(updatedBoard);
  }

  const checkWin = () => {
    let winningCords = [];
    //check horizontal
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns - (win - 1); j++) {
        for(let k = 0; k < win; k++){
          if (board[j + k][i] !== board[j][i] || board[j][i] === 0) {
            break;
          }
          if (k === win - 1) {
            for(let l = 0; l < win; l++){
              winningCords.push([j + l, i]);
              setField(j + l, i, 3);
            }
            console.log("win: " + board[j][i]);
            console.log(winningCords);
            return board[j][i];
          }
        }
      }
    }

    //check vertical
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows - (win - 1); j++) {
        for(let k = 0; k < win; k++){
          if (board[i][j + k] !== board[i][j] || board[i][j] === 0) {
            break;
          }
          if (k === win - 1) {
            for(let l = 0; l < win; l++){
              winningCords.push([i, j + l]);
              setField(i, j + l, 3);
            }
            console.log("win: " + board[i][j]);
            return board[i][j];
          }
        }
      }
    }

    //check diagonal
    for (let i = 0; i < columns - (win - 1); i++) {
      for (let j = 0; j < rows - (win - 1); j++) {
        for(let k = 0; k < win; k++){
          if (board[i + k][j + k] !== board[i][j] || board[i][j] === 0) {
            break;
          }
          if (k === win - 1) {
            for(let l = 0; l < win; l++){
              winningCords.push([i + l, j + l]);
              setField(i + l, j + l, 3);
            }
            console.log("win: " + board[i][j]);
            return board[i][j];
          }
        }
      }
    }

    //check diagonal
    for (let i = 0; i < columns - (win - 1); i++) {
      for (let j = rows - 1; j > win - 2; j--) {
        for(let k = 0; k < win; k++){
          if (board[i + k][j - k] !== board[i][j] || board[i][j] === 0) {
            break;
          }
          if (k === win - 1) {
            for(let l = 0; l < win; l++){
              winningCords.push([i + l, j - l]);
              setField(i + l, j - l, 3);
            }
            console.log("win: " + board[i][j]);
            return board[i][j];
          }
        }
      }
    }
    return 0
  }

  return (
    <div className="App">
      <h1>Vier Gewinnt !!!</h1>
      <h2>
        {won ?
          (turnPlayerOne ? "Spieler 1 gewinnt" : "Spieler 2 gewinnt") : 
          (turnPlayerOne ? "Spieler 1 ist am Zug" : "Spieler 2 ist am Zug")
        }
      </h2>

      {board.map((column, index) => (
        <div key={index} className="column">
          <Button variant="contained" color={turnPlayerOne? "primary" : "secondary"}
          disabled={won}
          onClick={() => handleButtonClick(index)}>o</Button>
          {column.map((field, index) => (
            <Field key={index} content={field}/>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
