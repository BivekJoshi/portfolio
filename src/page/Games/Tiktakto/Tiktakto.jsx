import { useState } from "react";
import "./Tiktakto.css";
import { useMode } from "../../../layout/ModeContext";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Square = ({ value, onSquareClick, mode }) => {
  const colorClass = value === "X" ? "red" : value === "O" ? "blue" : "";
  return (
    <button
      className={`square ${colorClass} ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

const Board = ({ xIsNext, squares, onPlay, onRestart, mode, winner }) => {
  function handleClick(i) {
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const { winner: calculatedWinner, winningLine } = calculateWinner(squares);

  let status;
  if (calculatedWinner) {
    status = "Winner: " + calculatedWinner;
  } else if (squares.every((square) => square !== null)) {
    status = "It's a draw!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div style={{ fontSize: "3rem", fontWeight: 900 }}>{status}</div>
      <div className="board">
        {squares.map((square, i) => (
          <Square
            key={i}
            value={square}
            onSquareClick={() => handleClick(i)}
            mode={mode}
          />
        ))}
        {winningLine && <WinningLine positions={winningLine} />}
      </div>
      <button className="restart-button" onClick={onRestart}>
        Restart Game
      </button>
    </>
  );
};

const WinningLine = ({ positions }) => {
  const [start, end] = positions;
  const startRow = Math.floor(start / 3);
  const startCol = start % 3;
  const endRow = Math.floor(end / 3);
  const endCol = end % 3;

  const lineStyle = {
    top: `${50 + startRow * 100}px`,
    left: `${50 + startCol * 100}px`,
    width: `${
      Math.sqrt(
        Math.pow(endRow - startRow, 2) + Math.pow(endCol - startCol, 2)
      ) * 100
    }px`,
    transform: `rotate(${Math.atan2(endRow - startRow, endCol - startCol)}rad)`,
  };
  return <div className="winning-line" style={lineStyle}></div>;
};

const Tiktakto = () => {
  const { mode } = useMode();
  const { width, height } = useWindowSize();
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function restartGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const { winner } = calculateWinner(currentSquares);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "cover",
        position: "relative",
      }}
    >
      {winner && <Confetti width={width} height={height} />}
      <Board
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={handlePlay}
        onRestart={restartGame}
        mode={mode}
        winner={winner}
      />
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningLine: [a, c] };
    }
  }
  return { winner: null, winningLine: null };
}

export default Tiktakto;
