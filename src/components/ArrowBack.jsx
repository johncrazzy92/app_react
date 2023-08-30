import flechacarousel from "../../public/img/Vector (Stroke).svg";
import PropTypes from "prop-types"

function ArrowNext({onClick}) {
  return (

       <img
          src={flechacarousel} onClick={onClick}
          className="-rotate-180 p-2 rounded-full bg-red-200 cursor-pointer z-10"
          alt="NavDerecha"
        /> 

  )
}
ArrowNext.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ArrowNext