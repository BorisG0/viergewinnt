import './App.css';
import Field from './field';
import React, { useState } from 'react';


function App() {
  const columns = 7;
  const rows = 6;

  const [board, setBoard] = useState(() => {
    const initialBoard = Array.from({ length: columns }, () => Array(rows).fill(0));
    return initialBoard;
  });

  return (
    <div className="App">
      <h1>Vier Gewinnt !!!</h1>
      
      {board.map((column, index) => (
        <div key={index} className="column">
          {column.map((field, index) => (
            <Field key={index} content={field}/>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
