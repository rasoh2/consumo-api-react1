import { useState } from "react";
import { Button } from "react-bootstrap";

// Definimos el componente "SearchBar" que acepta tres propiedades: "onSearch", "onFilter" y "onReset".
const SearchBar = ({ onSearch, onFilter, onReset }) => {
  // Utilizamos el hook "useState" para crear una variable de estado "searchTerm" y su función "setSearchTerm".
  // Inicializamos "searchTerm" con una cadena vacía para almacenar el término de búsqueda ingresado.
  const [searchTerm, setSearchTerm] = useState("");

  // La función "handleSearch" se invoca cuando el usuario escribe en la barra de búsqueda.
  // Guardamos el nuevo término de búsqueda en "searchTerm" y llamamos a la función "onSearch" proporcionada.
  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  // La función "handleReset" se llama cuando el usuario desea restablecer la búsqueda y los filtros.
  // Establecemos "searchTerm" en una cadena vacía y llamamos a la función "onReset".
  const handleReset = () => {
    setSearchTerm("");
    onReset();
  };

  // El componente "SearchBar" renderiza dos elementos principales: una barra de búsqueda y botones de filtro.
  return (
    <div className="mb-3">
      <div>
        {/* Creamos un input de tipo texto para la barra de búsqueda, vinculando su valor a "searchTerm". */}
        <input
          className="buscador"
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="botones">
        {/* Creamos un botón "Religioso" que activa la función "onFilter" con el argumento "Religioso". */}
        <Button className="religioso" onClick={() => onFilter("Religioso")}>
          Religioso
        </Button>

        {/* Creamos un botón "Civil" que hace lo mismo con el argumento "Civil". */}
        <Button className="civil" onClick={() => onFilter("Civil")}>
          Civil
        </Button>

        {/* Creamos un botón "Reiniciar" que llama a la función "handleReset" cuando se hace clic. */}
        <Button className="reset" onClick={handleReset}>
          Reiniciar
        </Button>
      </div>
    </div>
  );
};

// Exportamos el componente "SearchBar" para que pueda ser utilizado en otras partes de la aplicación.
export default SearchBar;
