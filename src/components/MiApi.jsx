import { Table } from "react-bootstrap";
// Creamos "MiApi". Es como un componente  que muestra una lista de días festivos los cuales llegan por props
const MiApi = ({ filteredByTipoFeriados }) => {
  return (
    <div>
      {/* Aquí empieza la parte donde decimos cómo debe verse la tabla. */}
      <Table responsive striped bordered hover style={{ tableLayout: "fixed" }}>
        <thead className="table-container">
          {/* Esta es la parte de arriba de la tabla, donde ponemos los encabezados. */}
          <tr>
            <th>Fecha</th>
            <th>Titulo</th>
            <th>Tipo</th>
            <th>Extra</th>
          </tr>
        </thead>
        {/* Aquí es donde r ponemos la información de los días festivos. */}
        <tbody>
          {/* Usamos  maps para extraer la información y repetir esta parte por cada día festivo en la lista. */}
          {filteredByTipoFeriados.map((feriado, index) => (
            // Aquí ponemos los detalles de cada día festivo en una fila.
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
