
import EmojiChanger from './components/emojiComponent'
import './App.css'
import { EmojiProvider } from '../context/emojiContext'

function App() {


  return (
    <>
    <EmojiProvider>
      
      <EmojiChanger/>

    </EmojiProvider>
    </>
  )
}

export default App
