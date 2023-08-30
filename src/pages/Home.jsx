import { RouterProvider } from 'react-router-dom'
import router from '../router/router'

import LayoutHome from '../layouts/LayoutHome'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default Home