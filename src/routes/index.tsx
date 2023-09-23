import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import NotFound from '../pages/not-found'
import Sobre from '../pages/sobre'
import Produtos from '../pages/tarefas'
import Contatos from '../pages/contatos'


const router = createBrowserRouter([
  {path: '/', element: <Home/>, errorElement:<NotFound />},
  {path: '/sobre', element: <Sobre/>},
  {path: '/tarefas', element: <Produtos/>},
  {path: '/contatos', element: <Contatos/>},
])

export default router