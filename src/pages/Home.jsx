
import LayoutHome from '../layouts/LayoutHome'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <div className='h-screen pb-32'>
        <LayoutHome children="hola"/>
    </div>
        <Footer />
    </>
  )
}

export default Home