import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'

const router = createBrowserRouter([
{
    path:'/', element:<App/>,
    errorElement:<Error/>,


    children:[
      {path:'home',element:<Home/>},
      {path:'produtos',element:<Produtos/>},
      {path:'sobre',element:<Sobre/>},
    ]
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
