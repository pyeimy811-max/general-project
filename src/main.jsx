import { createRoot } from 'react-dom/client'
import './styles/token.css'
import './styles/global.css'
import App from './App.jsx'
import React from 'react'
import "./styles/index.css"

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

