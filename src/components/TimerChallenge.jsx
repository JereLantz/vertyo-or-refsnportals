import { useState, useRef } from "react"
import ResultModal from "./ResultModal"

//let timer

export default function TimerChallenge({title, targetTime}){
    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    const timer = useRef()

    function handleStart(){
        setTimerStarted(true)
        timer.current = setTimeout(()=>setTimerExpired(true), targetTime*1000)
    }

    function handleStop(){
        clearTimeout(timer.current)
    }
    return(
        <>
        {timerExpired && <ResultModal targetTime={targetTime} result="lost"/>}

        <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
        {targetTime} second{targetTime > 1 ?"s":""}
        </p>

        <p>
        <button onClick={timerStarted ? handleStop:handleStart}>
        {timerStarted ? "Stop":"Start"} challenge
        </button>
        </p>

        <p className={timerStarted ? "active":undefined}>
        {timerStarted ?"Time is running...": "Timer inactive"}
        </p>
        </section>
        </>
    )
}
