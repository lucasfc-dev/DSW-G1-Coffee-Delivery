import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Success } from './pages/Success'
import { App } from './App'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/cart',
//         element: <Cart />,
//       },
//       {
//         path: '/order/:orderId/success',
//         element: <Success />,
//       },
//     ],
//   },
// ])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/order/:orderId/success' element={<Success />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

