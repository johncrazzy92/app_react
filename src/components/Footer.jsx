import background from "../../public/img/2a878f6c93a6f35eec672a24a51c2284.jfif"
import logo from "../../public/img/Logo Dos.png"

const Footer = () => {
  return (
    <div className="w-screen lg:bg-white " style={{ height: "50vh" }}>
        <img  style={{
      clipPath: 'circle(180% at 50% -700%)',
      zIndex: '-1',
      objectPosition: 'center 19%',
      
    }} className="hidden xl:block sm:h-2/3 w-screen object-cover " src={background} alt="Portada Jump" />
        <div className=" bg-white items-center justify-around h-full flex xl:h-1/3 flex-col sm:flex-row">
            <div className="gap-16 flex">
                <a href="">Home</a>
                <a href="">Mangas</a>
            </div>
            <div>
                <img src={logo} alt="logo minga" />
            </div>
            <div className="flex flex-col gap-4">
                <div className=" self-start ">
                <svg xmlns="http://www.w3.org/2000/svg" width="216" height="24" viewBox="0 0 216 24" fill="none">
                    <path className="cursor-pointer" d="M12.8192 24H1.32462C0.592836 24 0 23.4068 0 22.6753V1.32461C0 0.592925 0.592929 0 1.32462 0H22.6755C23.407 0 24 0.592925 24 1.32461V22.6753C24 23.4069 23.4069 24 22.6755 24H16.5597V14.7059H19.6793L20.1464 11.0838H16.5597V8.77132C16.5597 7.72264 16.8509 7.00801 18.3546 7.00801L20.2727 7.00717V3.76755C19.9409 3.7234 18.8024 3.62478 17.4778 3.62478C14.7124 3.62478 12.8192 5.31276 12.8192 8.4126V11.0838H9.69156V14.7059H12.8192V24Z" fill="#222222"/>
                    <path className="cursor-pointer" d="M151.988 6.85527C151.883 9.22196 150.249 12.4572 147.097 16.5624C143.834 20.8551 141.07 23 138.811 23C137.414 23 136.23 21.695 135.263 19.0765C134.615 16.674 133.972 14.2716 133.326 11.8763C132.606 9.2563 131.835 7.94703 131.011 7.94703C130.832 7.94703 130.207 8.32908 129.129 9.09461L128 7.61936C129.183 6.56766 130.348 5.51166 131.498 4.45852C133.073 3.07628 134.257 2.35082 135.047 2.27499C136.91 2.09183 138.059 3.38393 138.492 6.14698C138.953 9.13038 139.278 10.9848 139.457 11.7117C139.996 14.1843 140.586 15.4177 141.232 15.4177C141.733 15.4177 142.487 14.6193 143.491 13.021C144.496 11.4198 145.031 10.2035 145.104 9.36505C145.248 7.98281 144.711 7.29598 143.491 7.29598C142.917 7.29598 142.324 7.41904 141.716 7.6766C142.902 3.78601 145.159 1.89437 148.495 2.00455C150.966 2.07466 152.133 3.69443 151.988 6.85527Z" fill="#222222"/>
                    <path className="cursor-pointer" d="M88 4.36764C87.1182 4.76923 86.1687 5.04081 85.1727 5.16215C86.1898 4.5381 86.9702 3.54857 87.3379 2.36981C86.3856 2.94763 85.3333 3.368 84.2092 3.59335C83.3133 2.6125 82.0328 2 80.6156 2C77.8982 2 75.6936 4.26074 75.6936 7.04875C75.6936 7.44457 75.7359 7.82882 75.8204 8.19863C71.7281 7.98772 68.1007 5.97978 65.6707 2.92163C65.2467 3.66992 65.0044 4.5381 65.0044 5.46262C65.0044 7.21343 65.8736 8.75912 67.1949 9.66486C66.3892 9.6403 65.6285 9.41062 64.9635 9.03503V9.09715C64.9635 11.5442 66.661 13.5854 68.9149 14.0477C68.5022 14.1661 68.0669 14.2254 67.6175 14.2254C67.3006 14.2254 66.9907 14.195 66.6906 14.1358C67.3175 16.1408 69.1347 17.6013 71.29 17.6403C69.6052 18.9953 67.4809 19.8028 65.1749 19.8028C64.7776 19.8028 64.3846 19.7797 64 19.7335C66.1793 21.1636 68.7684 22 71.5478 22C80.6057 22 85.5573 14.3077 85.5573 7.63525C85.5573 7.41567 85.5531 7.1961 85.5446 6.98086C86.5068 6.26869 87.3421 5.38028 88 4.36764Z" fill="#222222"/>
                    <path className="cursor-pointer"  d="M214.806 5.26818C215.525 6.0016 215.76 7.66708 215.76 7.66708C215.76 7.66708 216 9.62336 216 11.5789V13.4128C216 15.3691 215.76 17.3246 215.76 17.3246C215.76 17.3246 215.525 18.9901 214.806 19.7235C213.984 20.5911 213.072 20.6808 212.557 20.7314C212.5 20.737 212.448 20.7421 212.402 20.7477C209.043 20.9924 204 21 204 21C204 21 197.76 20.9426 195.84 20.7568C195.749 20.7397 195.639 20.7264 195.514 20.7113C194.906 20.6378 193.951 20.5225 193.193 19.7235C192.474 18.9901 192.24 17.3246 192.24 17.3246C192.24 17.3246 192 15.3691 192 13.4128V11.5789C192 9.62336 192.24 7.66708 192.24 7.66708C192.24 7.66708 192.474 6.0016 193.193 5.26818C194.017 4.39935 194.93 4.31067 195.445 4.2606C195.501 4.25517 195.553 4.25019 195.599 4.24472C198.957 4 203.995 4 203.995 4H204.005C204.005 4 209.043 4 212.402 4.24472C212.447 4.2502 212.499 4.25518 212.555 4.26062C213.07 4.3107 213.983 4.39949 214.806 5.26818ZM201.521 8.84387L201.522 15.635L208.006 12.2511L201.521 8.84387Z" fill="#222222"/>
                </svg>
                </div>
                <a className="flex items-center justify-center bg-gradient-to-t from-orange-500 to-orange-600 text-white gap-4 p-2 rounded" href="">
                Donate 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                <path d="M21.5 8.75C21.5 6.26472 19.4013 4.25 16.8125 4.25C14.8769 4.25 13.2153 5.37628 12.5 6.98342C11.7847 5.37628 10.1231 4.25 8.1875 4.25C5.59867 4.25 3.5 6.26472 3.5 8.75C3.5 15.9706 12.5 20.75 12.5 20.75C12.5 20.75 21.5 15.9706 21.5 8.75Z" stroke="white" />
                </svg></a>
            </div>
        </div>
    </div>
  )
}

export default Footer