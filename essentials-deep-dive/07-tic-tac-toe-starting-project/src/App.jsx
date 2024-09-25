import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";
import Log from './components/Log.jsx'
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";


const PLAYER ={
    X : 'Player 1',
    O : 'Player 2'
}

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function derivedActivePlayer(gameTurn){
    let currentPlayer = 'X';

    if(gameTurn.length> 0 && gameTurn[0].player === 'X'){
        currentPlayer = 'O';
    }

    return currentPlayer;
}

function derivedGameBoard(gameTurns){
    let gameBoard = INITIAL_GAME_BOARD.map( arr => [...arr]);

    for ( const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player
    }
    return gameBoard
}

function derivedWinner(gameBoard,player){
    let winner;

    for (const combination of WINNING_COMBINATIONS){
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol =
            gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
            winner = player[firstSquareSymbol]
        }
    }
    return winner
}





function App() {
    const [player, setPlayer] = useState(PLAYER)
    const [gameTurns, setGameTurns] = useState([])
    // const [activePlayer, setActivePlayer] = useState('X');

    const activePlayer = derivedActivePlayer(gameTurns);


    const gameBoard = derivedGameBoard(gameTurns)
    const winner = derivedWinner(gameBoard,player);
    const hasDraw = gameTurns.length === 9 && !winner;


    function handleSelectSquare(rowIndex, colIndex){
        // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X' );

        setGameTurns(prevTurns => {
            const currentPlayer = derivedActivePlayer(prevTurns);

            const updatedTurns = [{square: {row: rowIndex, col: colIndex},player: currentPlayer},...prevTurns];
            return updatedTurns
        })
    }

    function handleRestart(){
        setGameTurns([])
    }

    function handlePlayerName(symbol,newName) {
        setPlayer(prevPlayer => {
            return {
                ...prevPlayer,
                [symbol]: newName
            }
        })
    }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYER.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerName} />
          <Player initialName={PLAYER.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerName}/>
        </ol>
          {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
        <Log turns={gameTurns}/>
    </main>
  )
}

export default App
