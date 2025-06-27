
import './toolCard.css';
import PropTypes from 'prop-types';

function ToolCard ({herramienta, descripcion, urlFoto})  {
    return (
        <div>
        <div className="card mb-3" >
     <div className="row g-0">
       <div className="col-md-4">
         <img src={urlFoto} className="img-fluid rounded-start" alt="..."/>
       </div>
       <div className="col-md-8">
         <div className="card-body">
           <h5 className="card-title">{herramienta}</h5>
           <p className="card-text">{descripcion}</p>
         </div>
         <button className='btn btn-primary'>editar</button>
         <button className='btn btn-danger'>borrar</button>
       </div>
     </div>
   </div>
       </div>
    );
};
ToolCard.propTypes = {
    herramienta: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    urlFoto: PropTypes.string.isRequired,
};

export default ToolCard;