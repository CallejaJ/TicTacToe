// Connect all the components and create an array to track value and pass down 
// as props to square component with value
import Square from "./Square"


/* This would all the squares and the UI structure of the game.
 Pass down the squareClick function to square component*/
export default function Board({ square, onClick, player, strikeClass, winner, reset }) {
    /* Create a grid of 9 squares with Tailwind CSS and pass down the square state
     as custom values from index 0 - 8. Remember JavaScript arrays are zero-indexed*/
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-3 grid-rows-3 relative m-16">
                        <Square
                            value={square[0]}
                            onClick={() => onClick(0)}
                            className="border-r-8 border-b-8"
                            player={player}
                        />
                        <Square
                            value={square[1]}
                            onClick={() => onClick(1)}
                            className="border-r-8 border-b-8"
                            player={player}

                        />
                        <Square
                            value={square[2]}
                            onClick={() => onClick(2)}
                            className="border-r-0 border-b-8"
                            player={player}
                        />
                        <Square
                            value={square[3]}
                            onClick={() => onClick(3)}
                            className="border-r-8 border-b-8"
                            player={player}
                        />
                        <Square
                            value={square[4]}
                            onClick={() => onClick(4)}
                            className="border-r-8 border-b-8"
                            player={player} />
                        <Square
                            value={square[5]}
                            onClick={() => onClick(5)}
                            className="border-r-0 border-b-8"
                            player={player} />
                        <Square
                            value={square[6]}
                            onClick={() => onClick(6)}
                            className="border-r-8 border-b-0"
                            player={player} />
                        <Square
                            value={square[7]}
                            onClick={() => onClick(7)}
                            className="border-r-8 border-b-0"
                            player={player} />
                        <Square
                            value={square[8]}
                            onClick={() => onClick(8)}
                            className="border-r-0 border-b-0"
                            player={player} />
                        <div
                            className={`absolute w-full bg-purple-600 z-40 ${strikeClass}`}>
                        </div>
                    </div>
                </div>
            </div>


                {winner && (
                    <div className="flex justify-center mt-16">
                        <div className="w-300 h-300 border-2 p-4 shadow-lg rounded-lg">
                            <h3 className="text-4xl">
                                {winner === "draw" ? "Its a Tie" : `Player ${winner} Wins!`}
                            </h3>
                        </div>
                    </div>
                )}

                <div className="flex justify-center mt-16 ">
                    <div className="w-300 h-300 border-2 p-4 text-4xl shadow-lg rounded-lg">
                        <button onClick={reset}>Reset</button>
                    </div>
            </div>
        </div>
    )
}