import Welcome from "./Welcome";
import Carousel from "./Carousel";

function Index() {
  return (
    <div className="h-full justify-center pt-20 lg:justify-between flex lg:flex-col">
    <Welcome />
    <Carousel />
    </div>
  )
}

export default Index