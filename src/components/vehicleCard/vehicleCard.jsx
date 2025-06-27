import { Link } from "react-router-dom"
import "./vehicleCard.css"
import PropTypes from "prop-types";
function VehicleCard({numero, descripcion, path}){
    return <>
    <div className="card" >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{numero}</h5>
    <p className="card-text">{descripcion}</p>
    <Link to={path} className="btn btn-primary">Control</Link>
  </div>
</div>
    </>
}
VehicleCard.propTypes = {
    numero: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default VehicleCard