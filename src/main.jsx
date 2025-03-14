import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './demo-card-components/index.css'
import App from './demo-card-components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
