import React , {useState} from 'react'

export default function Login() {

    const [count, setCount] = useState(3)
  return (
    <div>
        Login {count}

        <button onClick={()=>setCount(count+3)}></button>
    </div>
  )
}
