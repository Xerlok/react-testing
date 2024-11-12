import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting from './Greeting.jsx'
import { LorePartOne, LorePartTwo, LorePartThree } from './Lore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <LorePartOne />
    <LorePartTwo />
    <LorePartThree />
  </StrictMode>,
)
