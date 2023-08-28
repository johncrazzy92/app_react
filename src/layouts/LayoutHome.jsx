
import NavBar from './NavBar'
import background from "../../public/img/Background.png"
import Welcome from '../components/Welcome'


const LayoutHome = () => {
  return (
    <div className='w-full bg-cover flex flex-col p-5 gap-16 h-screen lg:h-2/3 lg:px-16 lg:py-6' style={{backgroundImage:`url(${background})`}}>
    <NavBar />
    <Welcome />
    </div>
  )
}

export default LayoutHome