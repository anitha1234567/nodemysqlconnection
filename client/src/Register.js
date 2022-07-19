import React, { useState } from 'react'

export default function Register() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    function send() {
        console.log(username, password)
        setUserName(""); setPassword("")
    }
    return (
        <div>
            <input type="text" value={username}
                onChange={(e) => { setUserName(e.target.value) }}
                placeholder="enter username" />

            <input type="password"
                value={password}
                placeholder="enter your password"
                onChange={(e) => { setPassword(e.target.value) }} />
            <button onClick={send}>submit</button>
        </div>
    )
}
