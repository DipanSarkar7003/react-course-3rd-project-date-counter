import { useReducer, useState } from 'react'

import './App.css'

function App() {
  const date = new Date("july 04 2024")
  const reduce = (state , action)=>{
console.log(state.initCount, action)
switch(action.type){
 case "plus" : return {initCount : state.initCount+ action.payload }
 case "minus" : return {initCount : state.initCount- action.payload }
 case "settingVal" : return {initCount : action.payload }
}
}


const initialState = {initCount : 0 }
  
const [steps, setSteps] = useState(1)
  // const [count, setCount] = useState(0)
  const [count , dispatch] = useReducer(reduce , initialState)


  // function minusSteps(){
  //    setSteps(steps-1)
  //  }
  //  function plusSteps(){
  //    setSteps(steps+1)
     
  //  }  
 function minusCount(){
    // setCount(count-steps)
dispatch( {type : "minus" , payload : 1 })
  
  }
  function plusCount(){
    // setCount(count+steps)
dispatch({ type:"plus" , payload :  1})
  }
  // date.setDate(date.getDate()+count)

  
// console.log(steps)
// console.log(count)

function settingVal(e){
  dispatch( {type: "settingVal" , payload : Number(e.target.value)})
 
}
const updatedDate = new Date(new Date("july 04 2024"));
updatedDate.setDate(updatedDate.getDate() + count.initCount);
 
console.log(updatedDate)

  return (
    <>
    <input type="range" min={0} max={10} value={steps} onChange={(e)=>setSteps(Number(e.target.value))} />
    {/* <button onClick={minusSteps}>-</button> <span>steps :{steps} </span> <button onClick={plusSteps}>+</button> */}
     <br />
     <br />
    <button onClick={minusCount}>-</button> <input type="number" value={count.initCount} onChange={(e)=>settingVal(e)} />  <button onClick={plusCount}>+</button>

    <p>{count.initCount} days from today is  {updatedDate.toDateString()} </p>

    </>
  )
}

export default App
