import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import MiApi from "./components/MiApi";
import SearchBar from "./components/Buscador";

// La función "App" es el componente principal de la aplicación.
function App() {
  // Utilizamos el hook "useState" para crear variables de estado.
  // "feriados" almacena todos los feriados y "filteredFeriados" almacena los feriados filtrados.
  const [feriados, setFeriados] = useState([]);
  const [filteredFeriados, setFilteredFeriados] = useState([]);

  // La función "obtenerDatos" asíncrona realiza una solicitud a la API y actualiza las variables de estado.
  const obtenerDatos = async () => {
    const url = "https://api.victorsanmartin.com/feriados/en.json";
    const response = await fetch(url);
    const json = await response.json();
    setFeriados(json.data);
    setFilteredFeriados(json.data);
  };

  // El hook "useEffect" se utiliza para ejecutar "obtenerDatos" cuando el componente se monta.
  useEffect(() => {
    obtenerDatos();
  }, []);

  // La función "handleSearch" filtra los feriados en función del término de búsqueda.(desde el input)
  const handleSearch = (searchTerm) => {
    const filtered = feriados.filter(
      (feriado) =>
        feriado.date.includes(searchTerm) ||
        feriado.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feriado.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFeriados(filtered);
  };

  // La función "handleFilter" filtra los feriados según el tipo seleccionado.
  const handleFilter = (filterType) => {
    if (filterType === "Religioso" || filterType === "Civil") {
      const filtered = feriados.filter(
        (feriado) => feriado.type === filterType
      );
      setFilteredFeriados(filtered);
    }
  };

  // La función "handleReset" restablece los feriados y el filtro.
  const handleReset = () => {
    setFilteredFeriados(feriados);
  };

  // Renderizamos la estructura de la pagina, utilizando componentes de Bootstrap.
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Calendario de Feriados</h1>
      </header>
      <aside className="app-sidebar">
        <Container>
          <SearchBar
            onSearch={handleSearch}
            onFilter={handleFilter}
            onReset={handleReset}
          />
        </Container>
      </aside>
      <main className="app-main">
        <Container>
          <Row>
            <Col>
              <div className="search-table-container">
                {/* Utilizamos el componente "MiApi" para mostrar los feriados */}
                <MiApi filteredByTipoFeriados={filteredFeriados} />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="app-footer">
        <Container>
          <p>© {new Date().getFullYear()} Mi App de Feriados</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
