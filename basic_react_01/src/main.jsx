import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div> 
  )
}
anotherUser="chai aur react"
const ReactElement = {
  type  : 'a',
  props :  {
    href:'https://google.com',
    target :'_blank',
  },
  children:"click me to visit google"
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Google</a>
)

const reactEle = React.createElement(
  'a',
  {href:"https://google.com",target:"_blank"},
  'Click me to visit google',
   anotherUser
)

createRoot(document.getElementById('root')).render(
   reactEle
)
