import { useState } from "react";

export default function Player() {
    const [playerName, setPlayerName] = useState("")
    const [submitted, setSubmitted] = useState(false)

    function handleNameChange(e){
        setSubmitted(false)
        setPlayerName(e.target.value)
    }

    function handleClick(){
        setSubmitted(true)
    }

  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" value={playerName} onChange={handleNameChange}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
