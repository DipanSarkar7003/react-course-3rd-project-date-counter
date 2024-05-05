import { useState } from 'react'

import './App.css'

function App() {
  const date = new Date("july 04 2024")
  
  
const [steps, setSteps] = useState(1)
  const [count, setCount] = useState(0)


  // function minusSteps(){
  //    setSteps(steps-1)
  //  }
  //  function plusSteps(){
  //    setSteps(steps+1)
     
  //  }
 function minusCount(){
    setCount(count-steps)

  
  }
  function plusCount(){
    setCount(count+steps)
 
  }
  date.setDate(date.getDate()+count)

  
console.log(steps)
console.log(count)

 


  return (
    <>
    <input type="range" min={0} max={10} value={steps} onChange={(e)=>setSteps(Number(e.target.value))} />
    {/* <button onClick={minusSteps}>-</button> <span>steps :{steps} </span> <button onClick={plusSteps}>+</button> */}
     <br />
     <br />
    <button onClick={minusCount}>-</button> <input type="number" value={count} onChange={(e)=>setCount(Number(e.target.value))} />  <button onClick={plusCount}>+</button>

    <p>{count} days from today is  {date.toDateString()} </p>

    </>
  )
}

export default App
