
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import Error from './routes/Error/Error.jsx'
import Home from './routes/Home/Home.jsx'
import Login from './routes/Login/Login.jsx'
import Registration from './routes/Registration/Registration.jsx'
import Contact from './routes/Contact/Contact.jsx'
import About from './routes/About/About.jsx'
import Products from './routes/Products/Products.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/', element:<App/>,
    errorElement:<Error/>,

    children:[
      {path:'/', element:<Home/>},
      {path:'/login', element:<Login/>},
      {path:'/registration', element:<Registration/>},
      {path:'/about', element:<About/>},
      {path:'/contact', element:<Contact/>},
      {path:'/products', element:<Products/>}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)