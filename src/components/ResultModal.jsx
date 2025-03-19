import { forwardRef, useImperativeHandle, useRef} from "react"

//export default function ResultModal({ref, result, targetTime}){
const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref){
    //NOTE: toi ref:in tuominen tähän komponenttiin toimii vain versiossa 19+
    // vanhemmissa joudutaan käyttämään tota importattua elementtiä reaktista
    
    const dialog = useRef()
    useImperativeHandle(ref, ()=>{
        return {
            open(){
                dialog.current.showModal()
            }
        }
    })
    return(
        <dialog ref={dialog} className="result-modal">
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>X seconds left.</strong></p>

        <form method="dialog">
        <button>Close</button>
        </form>
        </dialog>
    )
})

export default ResultModal
