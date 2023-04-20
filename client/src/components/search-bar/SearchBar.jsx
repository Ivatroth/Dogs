import './SearchBar.css';
import { useState } from 'react';


const SearchBar = ({onSearch}) => {

  const [searchName, setSearchName] = useState(""); // estado local para manejar el valor del imput

  const handleChange = (event) => {
    event.preventDefault();
    setSearchName(event.target.value)
  }

  return (
    <div className="navbar">
      <h3>Busqueda por Nombre:</h3>
      <input type='search' placeholder='Nombre de la Raza' onChange={handleChange}/>
      <button type='submit' onClick={() => {onSearch(searchName)}}>Buscar</button> 
    </div>
  );
}

export default SearchBar;