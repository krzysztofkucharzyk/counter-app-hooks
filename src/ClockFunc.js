import React, {useState, useEffect} from "react";

const ClockFunc = (props) => {
    
    const [date, setDate] = useState(new Date());  //nazwa zmiennej przechowującej stan, metoda do aktualizacji stanu = metoda useState - co zwróci metoda 
    
    const time = () => setDate(new Date());

    useEffect(() => { // paramtr to funkcja e.g:'did Update'
        let timer = setInterval(() => {
            time()
        }, 1000);
        
        return (() => {
            clearInterval(timer)
        })
    }, [date]); 

    return (
        <div className="clock">
            <h4>Time: {date.toLocaleTimeString()} <span onClick={props.toggleClockM}>X</span></h4>
        </div>
    )

}


export default ClockFunc;