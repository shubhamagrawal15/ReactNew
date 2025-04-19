import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './Chai'
function App() {
 
  const username = "chai aur code"

  return (
    <>
    <Chai></Chai>
    <p>Good to go {username}</p>
    </>
  )
}

export default App
