import Button from "./Button"


const Welcome = () => {
  return (
    <div className='flex h-full flex-col lg:px-16 lg:py-6 gap-1 items-center justify-center lg:items-start lg:justify-start'>
          <h1 className='sm:text-left text-white text-4xl lg:text-6xl font-bold mb-1'>For the love of manga</h1>
          <p className='sm:text-left text-white text-2xl'>Explore our varieties</p>
          <p className='sm:text-left text-white '>#Mingalove❤️ </p>
          <Button/>
    </div>
  )
}

export default Welcome