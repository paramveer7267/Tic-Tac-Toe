import { useState } from "react"

const Player = ({ pName, symbol }) => {
    const [name , setName] = useState(pName)
    const [isEditing , setIsEditing] = useState(false);
    let playerName = <span className="player-name">{name}</span>
    function handleEdit(){
        setIsEditing( editing => !editing);
    }
    function handleChange(e){
        setName(e.target.value)
    }

    if(isEditing){
        playerName = <input type="text" required value={name} onChange={handleChange}/>
    }
    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}

export default Player
