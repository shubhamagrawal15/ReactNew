import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(18)
  // let counter = 15;

  const addValue =()=>{
    if(counter<20){
      // setCounter accepts a call function
        setCounter((previousCount)=>{
         if(previousCount<20)return previousCount+1;
         return previousCount;
        })
        setCounter((previousCount)=>{
          if(previousCount<20)return previousCount+1;
          return previousCount;
            
        })
        setCounter((previousCount)=>{
          if(previousCount<20)return previousCount+1;
         return previousCount;
        })
          setCounter((previousCount)=>{
            if(previousCount<20)return previousCount+1;
            return previousCount;
        })
        setCounter((previousCount)=>{
          if(previousCount<20)return previousCount+1;
         return previousCount;
            
        })
        
        

        

          
    }
   
  }

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
    
  }
  
 return(
  <>
  <h1>Chai aur react</h1>
  <h2>Counter value :{counter}</h2>
  <button
  onClick={addValue}
  >Add Value  {counter}</button>
  <br />
  <button
  onClick={removeValue}
  >RemoveValue  {counter}</button>
  <p> footer:  {counter}</p>
  </>
 )
  
}

export default App
