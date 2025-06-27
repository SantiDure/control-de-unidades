import VehicleCard from "../../components/vehicleCard/vehicleCard"
import PropTypes from 'prop-types';

function Home({moviles}){



    return (
        <>
            {moviles.map((vehicle, index) => (
                <VehicleCard
                    key={index}
                    numero={vehicle.numero}
                    descripcion={vehicle.descripcion}
                    path={`/movil-${vehicle.numero}`}
                    herramientas={vehicle.herramientas} 
                />
            ))}
        </>
    );
    }
    Home.propTypes = {
        moviles: PropTypes.arrayOf(
            PropTypes.shape({
                numero: PropTypes.string.isRequired,
                descripcion: PropTypes.string.isRequired,
                herramientas: PropTypes.array.isRequired,
            })
        ).isRequired,
    };
    
    export default Home