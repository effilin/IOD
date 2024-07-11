
import EmojiChanger from './components/emojiComponent'
import './App.css'
import { EmojiProvider } from '../context/emojiContext'
import BitcoinRates from './components/bitcoinRates'

function App() {


  return (
    <>
    <EmojiProvider>
      <BitcoinRates />
      <EmojiChanger/>
    </EmojiProvider>
    </>
  )
}

export default App
