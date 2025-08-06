import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import AppRouter from './routes/AppRouter';
import '@fortawesome/fontawesome-free/css/all.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)