import { useState, useRef } from "react";

export default function Player() {
    const playerName = useRef()

    const [inputName, setPlayerName] = useState(null)

    function handleClick(){
        setPlayerName(playerName.current.value)
        //NOTE: In this case this if okey, to clear an input field, after submitting
        // But you should control the DOM through react
        playerName.current.value = ""
    }

  return (
    <section id="player">
      <h2>Welcome {inputName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
