
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import Error from './routes/Error/Error.jsx'
import Home from './routes/Home/Home.jsx'
import Login from './routes/Login/Login.jsx'
import Registration from './routes/Registration/Registration.jsx'
import Dashboard from './routes/Dashboard/Dashboard.jsx'
import Sobre from './routes/Sobre/Sobre.jsx'
import Contact from './routes/Contact/Contact.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/', element:<App/>,
    errorElement:<Error/>,

    children:[
      {path:'/', element:<Home/>},
      {path:'/login', element:<Login/>},
      {path:'/registration', element:<Registration/>},
      {path:'/sobre', element:<Sobre/>},
      {path:'/contact', element:<Contact/>},
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)