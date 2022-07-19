import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Retrieve() {
    function bring() {
        axios.get("http://localhost:4000/getusers")
            .then((res) => {
                console.log(res.data)
            })

    }
    return (
        <div>
            <button onClick={bring}>click

            </button>
        </div>
    )
}
