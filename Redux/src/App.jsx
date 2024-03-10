import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Components/Navbar.jsx"
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './redux/counter/counterslice.js'
function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
        <Navbar/>
      <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
        currently count is {count}
        <button onClick={()=>dispatch(incrementByAmount(6))}>+</button>
      </div>
    </>
  )
}

export default App
