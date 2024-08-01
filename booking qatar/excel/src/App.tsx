import { useState } from 'react'

import './App.css'
import {ExcelComponent} from './comp/Sheet'
import LandingPage from './comp/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ExcelComponent/> */}
      <LandingPage/>
       
    </>
  )
}

export default App
