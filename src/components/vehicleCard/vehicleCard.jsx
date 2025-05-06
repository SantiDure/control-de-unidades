import { Link } from "react-router-dom"
import "./vehicleCard.css"
function VehicleCard(){
    return <>
    <div className="card" >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Movil 15</h5>
    <p className="card-text">Camioneta blanca</p>
    <Link href="/movil-15" className="btn btn-primary">Control</Link>
  </div>
</div>
    </>
}

export default VehicleCard