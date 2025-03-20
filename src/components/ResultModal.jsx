import { forwardRef, useImperativeHandle, useRef} from "react"
import {createPortal} from "react-dom"

//export default function ResultModal({ref, result, targetTime}){
const ResultModal = forwardRef(function ResultModal({onReset, targetTime, remainingTime}, ref){
    //NOTE: toi ref:in tuominen tähän komponenttiin toimii vain versiossa 19+
    // vanhemmissa joudutaan käyttämään tota importattua elementtiä reaktista
    
    const userLost = remainingTime <= 0
    const formattedRTime = (remainingTime/1000).toFixed(2)
    const score = Math.round((1 - remainingTime / (targetTime*1000)) * 100)

    const dialog = useRef()
    useImperativeHandle(ref, ()=>{
        return {
            open(){
                dialog.current.showModal()
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} className="result-modal">
        {userLost ? <h2>You lost</h2> : <h2>Your score: {score}</h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{formattedRTime} seconds left.</strong></p>

        <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
        </form>
        </dialog>
        , document.getElementById("modal")
    )
})

export default ResultModal
