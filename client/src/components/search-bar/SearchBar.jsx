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
      <h3 className='title'>Busqueda por Nombre:</h3>
      <input className='searchInput' name='input' type='search' placeholder='Nombre de la Raza' onChange={handleChange} />
      <button className='searchButton' type='submit' onClick={() => {
        onSearch(searchName)}}>Buscar</button> 
    </div>
  );
}

export default SearchBar;