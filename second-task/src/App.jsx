
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List />
    </>
  )
}

export default App
