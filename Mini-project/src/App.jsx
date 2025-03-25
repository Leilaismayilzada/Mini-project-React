import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ROUTES } from './routes/routes'


const App = () => {
  return (
   <RouterProvider router={ROUTES}/>
  )
}

export default App
