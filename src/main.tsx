import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import Header from './componentes/header/Header'
import Portfolio from './componentes/portfolio/Portfolio'
import Footer from './componentes/footer/Footer'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
              <Header/>
              <Portfolio/>
              <Footer/>
            </>,
  },
  {
    path: "/Home",
    element: <div>Página Home!</div>,
  },
  {
    path: "/Sobre",
    element: <div>Página Sobre!</div>,
  },
  {
    path: "/Projetos",
    element: <div>Página de Projetos!</div>,
  },
  {
    path: "/Contato",
    element: <>
    <Header/>
    <div className='contato'>
      <form>
        <div className="form-info">
          <label>Nome:</label>
          <div className="nomeForm">
            <input type="text" placeholder='Nome'/>
            <input type="text" placeholder='Sobrenome'/>
            </div>

            <label>E-mail:</label>
            <input className='input-n' type='email' placeholder='E-mail'/>

            <label>Endereço:</label>
            <input className='input-n' type='text' placeholder='Endereço'/>

            <label>Telefone:</label>
            <input className='input-n' type='tel' placeholder='Telefone'/>
            </div>
            <button>Enviar</button>
            </form>
      </div>

      <Footer/>
      </>

  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)