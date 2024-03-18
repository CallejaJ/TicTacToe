import './App.css'
// Connect all the components and create an array to track value and pass down 
// as props to square component with value
import Board from "./Board"
// Import useState from react and create an array with the initial value of null to hold all the values of 9 squares
import { useEffect, useState } from "react"
// This component will represent the Tic Tac Toe game board and hold all the logic of the game.
// Handling the winning combination and using the strikeClass based on the winning position.

// Winne function 

function checkWinner(square, setStrikeClass, setWinner) {
    // Multiple winning combination based on the position of the square and value
    const winningCombos = [
        { combo: [0, 1, 2], strikeClass: "strike-row-1" }, // top row
        { combo: [3, 4, 5], strikeClass: "strike-row-2" }, // middle row
        { combo: [6, 7, 8], strikeClass: "strike-row-3" }, // bottom row
        { combo: [0, 4, 8], strikeClass: "strike-row-4" }, // top left
        { combo: [2, 4, 6], strikeClass: "strike-row-5" }, // top right
        { combo: [0, 3, 6], strikeClass: "strike-row-6" }, // left column
        { combo: [1, 4, 7], strikeClass: "strike-row-7" }, // middle column
        { combo: [2, 5, 8], strikeClass: "strike-row-8" }, // right column
    ];
    for (const { combo, strikeClass } of winningCombos) {
        const [a, b, c] = combo;
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            setStrikeClass(strikeClass);
            if (square[a] === "X") {
                setWinner("X");
            } else {
                setWinner("O");
            }
            return;
        }
    }
    const isDraw = square.every((square) => square !== null);
    setWinner(isDraw ? "draw" : null);
}


export default function TicTacToe() {
    // We would create an array and track the state with useState. 
    const [square, setSquare] = useState(Array(9).fill(null))
    // Track each player Turn with useState and value X and O. 
    // Create a click event to change the state of each square on player click
    const [player, setPlayer] = useState("X")
    const [strikeClass, setStrikeClass] = useState("hidden");
    const [winner, setWinner] = useState("");

    function handleSquareClick(index) {
        // Return if square already contents a value
        if (square[index] !== null) return;
        // Create a new array to add each square index 
        const newSquare = [...square];
        newSquare[index] = player;
        // Set square array to the new Array
        setSquare(newSquare);
        // Switch between X and O based on player turn
        setPlayer(player === "X" ? "O" : "X");
    }

    // Track the winner
    useEffect(() => {
        checkWinner(square, setStrikeClass, setWinner);
    }, [square])

    function handleReset() {
        if (!winner && winner !== "draw") return;
        setSquare(Array(9).fill(null));
        setPlayer("X");
        setStrikeClass("hidden");
        setWinner("");
    }


    return (
        <div>
            {/* {Pass down square as a prop to Board component} */}
            {/* Pass down the handleSquareClick to Board component */}
            <Board
                square={square}
                onClick={handleSquareClick}
                strikeClass={strikeClass}
                player={player}
                winner={winner}
                reset={handleReset}
            />
        </div>
    )
}