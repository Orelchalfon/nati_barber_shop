import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div dir='rtl'>
        <h1>NatiBarberShop</h1>
        <p >ברוכים הבאים ל- <span>NatiBarberShop</span></p>
     </div>
    </>
  )
}

export default App
