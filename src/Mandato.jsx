import { useState } from "react"

function Mandato() {
    const [name, setName] = useState("Maxwell")
    const [age] = useState()
    const [, setSomething] = useState("Hey")
    const HandleHey=()=>{
        setName="Jose"
    }


return (
    <div className="Mandato">
        <h2>Hola {name}</h2>
        <p>{age}</p>
        <button>Hey</button>
    </div>
)
}
export default Mandato;