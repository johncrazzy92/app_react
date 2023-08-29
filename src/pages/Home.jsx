import { RouterProvider } from 'react-router-dom'
import router from '../router/router'



const Home = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Home