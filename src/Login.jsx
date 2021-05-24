import React, { useState } from "react"

const Login = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [isLogged, setIsLogged] = useState(false)

    const handelLoginClick = () => {
        setIsLogged(true)
    }

    return (
        <div>
            <input value={user} onChange={({ target: { value } }) => setUser(value)} type="text" />
            <input value={password} onChange={({ target: { value } }) => setPassword(value)} type="password" />
            <button onClick={handelLoginClick}>Log In</button>
            <h2>{isLogged && <h2>Login Succefully</h2>}</h2>
        </div>
    )


}

export default Login;
