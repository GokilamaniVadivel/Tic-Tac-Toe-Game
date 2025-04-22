import React, { useState } from "react";
import "./styles.css";

const game = () => {
  const [board, setBoard] = useState(Array(9).fill("+")); // Initialize with "+"
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (newBoard) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        newBoard[a] !== "+" &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] !== "+" || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setWinner(checkWinner(newBoard));
  };

  return (
    <div className="game-container">
      <div className="board">
        {board.map((value, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
            style={{
              color: value === "X" ? "white" : value === "O" ? "black" : "red",
              backgroundColor: "green",
              border: "3px solid blue",
              borderRadius: "7px",
            }}
          >
            {value}
          </button>
        ))}
      </div>
      <h2 style={{ color: "white" }}>
        Player: {isXNext ? "Player X" : "Player O"}
      </h2>
      <h2 style={{ color: "white" }}>
        Winner is {winner ? `Player ${winner}` : "No Winner Yet"}
      </h2>
    </div>
  );
};

export default game;
