import { useState, useRef } from "react";

export default function Player() {

    const playerName = useRef();
    const [enteredPlayerName, setEnteredPlayerName] = useState('');
    // const [submitted , setSubmitted] = useState(false);

    // function handleChange(e){
    //     setEnteredPlayerName(e.target.value)
    // }

    function handleClick(){
        // noinspection JSUnresolvedVariable
        setEnteredPlayerName(playerName.current.value);
        playerName.current.value = '';
    }

  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" placeholder="Enter player name"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
