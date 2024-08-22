import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Salesapp from './Salesapp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Salesapp/>
  </StrictMode>,
)
