import flechacarousel from "../../public/img/Vector (Stroke).svg";
import PropTypes from "prop-types"

function ArrowNext({onClick}) {
  return (

       <img
          src={flechacarousel} onClick={onClick}
          className="p-2 rounded-full bg-red-200 cursor-pointer"
          alt="NavDerecha"
        /> 

  )
}
ArrowNext.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ArrowNext