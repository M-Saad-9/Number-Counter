import { useState } from 'react'
import './App.css'

function App() {
 const [num, setNum] = useState(0)

  return (
    <>
    <button onClick={() =>{
      setNum(num+1);
    }} >
    Add</button>

    <p id='num'>{num}</p>

    <button onClick={() =>{
    setNum(num-1);
      
    }}>Minus</button>
    </>
  )
}
export default App
