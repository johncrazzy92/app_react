import './App.css'


export default function App() {
  return (
    <div className='flex flex-col h-screen w-screen'>
      <div className='h-3/5 w-screen bg-no-repeat bg-cover flex flex-col px-16 py-6 gap-16' style={{backgroundImage:"url(./public/img/Background.png)"}}  >
      <div className='w-100 flex justify-between'>
        <img src="./public/img/Menu.png" alt="hamburguesa" />
        <img src="./public/img/Logo Dos.png" alt="Logo minga" />
      </div>
        <div className='flex flex-col gap-1 '>
          <h1 className='text-left text-white text-6xl font-bold mb-1'>For the love of manga</h1>
          <p className='text-left text-white text-2xl'>Explore our varieties</p>
          <p className='text-left text-white '>#Mingalove❤️ </p>
          <button className='text-orange-600 w-60 bg-white border p-3.5 gap-2.5 rounded-md text-2xl flex justify-center items-center pt-2'>Sign In!</button>
        </div>
      </div>
      <div className='p-14 flex flex-col w-screen h-2/5'>
        <div className='w-100 flex bg-gradient-to-t from-orange-500 to-orange-600  justify-between items-center p-8'>
          <img src="./public/img/Vector (Stroke).svg" className='-rotate-180 p-2 rounded-full bg-red-200' alt="NavIzquierda" />
          <div className='absolute flex gap-14'>
            <img src="./public/img/283918815cce51edfc3bd01e534298c8-removebg-preview 1.png" alt="Nami Imagen" className='relative' />
            <img src="./public/img/image 2.png" alt="One Piece imagen" className='h-64' />
          </div>
            <div className='flex w-4/5 flex-row-reverse h-48 items-center '>
              <div className='flex w-3/6 flex-col'>
                <h2 className='text-left text-lg font-bold inline-flex gap-10 text-white'>
                  Shonen
                </h2>
                <p className='text-left text-white leading-2'>
                Is the manga that is aimed at adolescent boys.
                They are series with large amounts of action, in which humorous situations often occur.
                The camaraderie between members of a collective or a combat team stands out.
                </p>
              </div>
            </div>
          <img src="./public/img/Vector (Stroke).svg" className='p-2 rounded-full bg-red-200'  alt="NavDerecha" />
        </div>
      </div>
    </div>
  )
}