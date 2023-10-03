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
    element: <div className='contato'>
      <nav>
        <ul>
          <li>
            <p>Nome:</p>
            <button>Nome</button>
            <button>SobreNome</button>
          </li>
          <li>
            <p>Email:</p>
            <button>Email</button>
          </li>
          <li>
            <p>Endereço:</p>
            <button>Endereço</button>
          </li>
          <li>
            <p>Telefone:</p>
            <button>Telefone</button>
          </li>
        </ul>
      </nav>
      </div>
    
  
  
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)