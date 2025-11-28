import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Exemplo01 from './Exemplo01.tsx'
import Exemplo02 from './Exemplo02.tsx'
import Exemplo03 from './Exemplo03.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Exemplo01 />
    <Exemplo02 />
    <Exemplo03 />
  </StrictMode>,
)
