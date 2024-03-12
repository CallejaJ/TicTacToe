// This component would represent every individual square in the game board.
export default function Square({ value, onClick, className, player }) {
    // In the square component use value as the content of each square.
    // Pass down the squareClick function to square component.
    let hoverClass = null;
    if (value == null && player != null) {
        hoverClass = `${player.toLowerCase()}-hover`;
    }
    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-36 h-36 text-5xl ${className} ${hoverClass}`}>
            {value}
        </button>
    )
}