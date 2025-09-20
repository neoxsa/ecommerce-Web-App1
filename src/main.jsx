import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { Home, Shop, About, Contact, SingleProduct, Cart, Checkout } from './pages/index.js'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/products' element={<Shop />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/products/slug/:slug' element={<SingleProduct />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
