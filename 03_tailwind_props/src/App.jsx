import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App()
{
  let myObj ={
    name:"shubham",
    age:21
  }

  let myArr=[1,2,3,4];

  return (
    <>
     <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
     <Card channel="chaiaurcode" someObj={myObj} someArr={myArr}></Card>
     <Card channel="shubham"></Card>
     <Card ></Card>
    </>
  )
}

export default App
