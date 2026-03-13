import { useState } from 'react'
import './App.css'
import King from './King'
import CorporateMedia from './CorporateMedia'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <King/>
      <CorporateMedia/>
    </>
  )
}

export default App
