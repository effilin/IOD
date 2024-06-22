import { useState } from 'react'
import BigCats from './components/bigCats'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BigCats/>
      
    </>
  )
}

export default App
