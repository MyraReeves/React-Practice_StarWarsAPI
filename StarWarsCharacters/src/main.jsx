import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import PageNotFound from './PageNotFound.jsx'

const router = createBrowserRouter(
  [
    {path:"/", element: <App/>},
    {path:"*", element: <PageNotFound />}
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router = {router} />
  </StrictMode>,
)
