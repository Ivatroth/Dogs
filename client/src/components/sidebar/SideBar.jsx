import SearchBar from '../../components/search-bar/SearchBar';
import './SideBar.css'

const SideBar = ({searchF, searchO, searchT, onSearch, handleChange, allTemperaments})=>{

    return (
        <div className='menu'>
        <SearchBar onSearch ={onSearch}/>
        <div>
        <h3 className='title'>Filtrar: {searchF}</h3>
          <select name = "filtrar" onChange={handleChange}>
            <option value = "Todos">Todos</option>
            <option value = "Api">Api</option>
            <option value = "Base de Datos">Base de Datos</option>

          </select>
          <h3 className='title'>Ordenar: {searchO}</h3>
          <select name = "ordena" onChange={handleChange}>
            <option value = "Sin Orden">--------</option>
            <option value = "Ascendente">Ascendente</option>
            <option value = "Descendente">Descendente</option>
            <option value = "Mayor Peso">Mayor Peso</option>
            <option value = "Menor Peso">Menor Peso</option>
          </select>

          <h3 className='title'>Temperamento: {searchT}</h3>
          <select name = "temperaments" onChange={handleChange}> 
            {
              allTemperaments.map((temp) => {
                return (<option value= {temp}>{temp}</option>)
              })
            }
          </select>
        </div>
      </div>
    )
}

export default SideBar;