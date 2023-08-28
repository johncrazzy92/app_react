
import LayoutHome from '../layouts/LayoutHome'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <>
    <div className='h-screen pb-32'>
        <LayoutHome/>
        <Carousel />
    </div>
        <Footer />
    </>
  )
}

export default Home