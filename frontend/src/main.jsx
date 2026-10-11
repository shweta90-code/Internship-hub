import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './component/css/style.css'
import './component/css/header.css'
import App from './App.jsx'
import PathMapper from './PathMapper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <PathMapper/>

  </StrictMode>,
)
