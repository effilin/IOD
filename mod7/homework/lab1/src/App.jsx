import { useState } from 'react'
import './App.css'
import BitcoinRates from './components/bitcoinRates';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BitcoinRates/>
    </>
  )
}

export default App
