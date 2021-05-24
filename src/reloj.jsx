import React from "react"
import { useState } from "react"

const Reloj = () => {

   

    var time = new Date().toLocaleTimeString()


    const [Ctime, setCtime] = useState(time)
    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setCtime(time)
    }
    const handlerClick = () => {
        setInterval(updateTime, 1000)
    }
    const stop = () => {
      
    }

    return (
        <div>
            <h1>{time}</h1>
{console.log(time)}
            <button onClick={handlerClick}>Empezar</button>
            <button onClick={stop}> Parar</button>

        </div>
    )
}
export default Reloj;