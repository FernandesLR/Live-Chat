import './App.css'
import { LeftSide } from './components/UserList.jsx'
import { Chat } from './components/Chat.jsx'

function App() {

  return (
    <div className='display'>
      <LeftSide/>
      <Chat/>
    </div>
  )
}

export default App
