import { Table } from "react-bootstrap";
// Creamos "MiApi". Es un componente  que muestra una lista de días festivos los cuales llegan por props
const MiApi = ({ filteredByTipoFeriados }) => {
  return (
    <div>
      {/* Aquí se monta la tabla de bootstrap. */}
      <Table responsive striped bordered hover style={{ tableLayout: "fixed" }}>
        <thead className="table-container">
          {/* este es el encabezado de la tabla. */}
          <tr>
            <th>Fecha</th>
            <th>Titulo</th>
            <th>Tipo</th>
            <th>Extra</th>
          </tr>
        </thead>
        {/* Aquí de monta la información de los días festivos. */}
        <tbody>
          {/* Usamos  maps para extraer la información y repetir esta parte por cada día festivo en la lista. */}
          {filteredByTipoFeriados.map((feriado, index) => (
            // Aquí ponemos los detalles de cada día festivo en una fila.
            // key es una propiedad de React que identifica de manera única cada elemento en la lista
            <tr key={index}>
              <td>{feriado.date}</td>
              <td>{feriado.title}</td>
              <td>{feriado.type}</td>
              <td>{feriado.extra}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MiApi;
