"use client"
import { useState } from "react"
export default function CSR() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>CSR</h1>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>inc</button>
            <button onClick={() => setCount(count - 1)}>dec</button>
        </div>
    )
}