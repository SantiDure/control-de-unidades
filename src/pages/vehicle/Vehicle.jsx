import ToolCard from "../../components/toolCard/ToolCard";

function Vehicle(moviles) {
  console.log(moviles.movil.herramientas);
  return (
moviles.movil.herramientas.map((herramienta, index) => (
    <div key={index}>
      <ToolCard herramienta={herramienta.nombre} descripcion={herramienta.descripcion} urlFoto={herramienta.urlFoto}/>

    </div>
  ))
  );
}
export default Vehicle;