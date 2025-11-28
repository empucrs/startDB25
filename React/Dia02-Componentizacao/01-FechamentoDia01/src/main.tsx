import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
//import { Exemplo01 } from './Exemplo01.tsx'
//import { Exemplo02 } from './Exemplo02.tsx'
//import { Exemplo03RenderizacaoCondicional } from './Exemplo03RenderizacaoCondicional.tsx'
import { Exemplo04ColecoesSimples } from './Exemplo04ColecoesSimples.tsx'
import { Exemplo05ColecoesFiltragemTransformacao } from './Exemplo05ColecoesFiltragemTransformacao.tsx'
import { Exemplo06ColecoesDeObjetos } from './Exemplo06ColecoesDeObjetos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {
    /*
    <App />
    <Exemplo01 />
    <Exemplo02 />
    <Exemplo03RenderizacaoCondicional />
    <Exemplo04ColecoesSimples/>
    <Exemplo05ColecoesFiltragemTransformacao/>
    */}

      <Exemplo06ColecoesDeObjetos />
  </StrictMode>,
)
