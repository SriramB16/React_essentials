import { useState } from 'react'

function Player({initialName,symbol,isActive,onChangeName}){
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing((editing) => !editing);

        if(isEditing){
            onChangeName(symbol,playerName);
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit"

    if (isEditing){
        editablePlayerName = <input type='text' value={playerName} onChange={handleChange} required/>
        btnCaption = "Save"
    }

    return(
        <li className={ isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
               {/* alternate way */}
               {/*{isEditing ? <input type='text'/> : <span className="player-name">{name}</span>}*/}

                <span className={"player-symbol"}>{symbol}</span>
            </span>
            <button onClick={handleClick}>{btnCaption}</button>
            {/*    alternate way */}
            {/*  <button onClick={handleClick}>{ isEditing ? 'Save' : 'Edit'}</button>*/}
        </li>
    );
}

export default Player;