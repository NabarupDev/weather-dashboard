import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Disable React Router console warnings in production
if (import.meta.env.PROD) {
  console.warn = () => {};
  console.error = (message) => {
    // Allow critical errors but filter out React Router warnings
    if (typeof message === 'string' && 
        !message.includes('React Router')) {
      console.error(message);
    }
  };
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
