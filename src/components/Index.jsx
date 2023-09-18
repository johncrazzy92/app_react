import Welcome from "./Welcome";
import Carousel from "./Carousel";

function Index() {
  return (
    <div className="h-full justify-center lg:justify-between pt-20 flex lg:flex-col">
      <Welcome />
      <Carousel />
    </div>
  )
}

export default Index