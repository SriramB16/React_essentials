// import { useState } from "react";



export default function GameBoard({onSelectSquare, board}) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    //
    // function handleSelectedSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = prevGameBoard.map(innerArray => [...innerArray]);
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSelect;
    //         return updatedGameBoard;
    //     })
    //
    //     onSelectSquare();
    // }
    return (
        <ol id='game-board'>
            {board.map((row,rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex) =>
                        <li key={colIndex}>
                            {/*<button onClick={() => handleSelectedSquare(rowIndex, colIndex)}>{playerSymbol}</button>*/}
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                        </li>
                    )}
                </ol>
            </li>)}

        </ol>
    )
}