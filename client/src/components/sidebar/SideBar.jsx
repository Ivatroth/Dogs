import SearchBar from '../../components/search-bar/SearchBar';
import './SideBar.css'

const SideBar = ({searchDogs, searchF, searchO, searchT, onSearch, handleChange, allTemperaments})=>{

    return (
        <div className='menu'>
        <div className='filtrar'>
          <h2>Opciones de Filtrado</h2>
          <div className="bar">
          <SearchBar  searchDogs={searchDogs} onSearch ={onSearch}/>
          </div>
        
        <h3 className='title'>Por Origen:   {searchF}</h3>
          <select name = "filtrar" onChange={handleChange}>
            <option value = "Todos">Todos</option>
            <option value = "Api">Api</option>
            <option value = "Base de Datos">Base de Datos</option>

          </select>
          <h3 className='title'>Por Temperamento:   {searchT}</h3>
          <select name = "temperaments" onChange={handleChange}> 
            {
              allTemperaments.map((temp) => {
                return (<option value= {temp}>{temp}</option>)
              })
            }
          </select>
          </div>
          <div className='ordenar'>
          <h3 className='title'>Ordenar: {searchO}</h3>
          <select name = "ordena" onChange={handleChange}>
            <option value = "Sin Orden">--------</option>
            <option value = "Ascendente">Ascendente</option>
            <option value = "Descendente">Descendente</option>
            <option value = "Mayor Peso">Mayor Peso</option>
            <option value = "Menor Peso">Menor Peso</option>
          </select>
          </div>
          
        
      </div>
    )
}

export default SideBar;