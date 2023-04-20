import SearchBar from '../../components/search-bar/SearchBar';
import './SideBar.css'

const SideBar = ({onSearch, handleChange, handelSelect, allTemperaments})=>{

    return (
        <div className='menu'>
        <SearchBar onSearch ={onSearch}/>
        <div>
          <h3>Ordenar:</h3>
          <select name = "ordena" onChange={handleChange}>
            <option value = "nada">--------</option>
            <option value = "Ascendente">Ascendente</option>
            <option value = "Descendente">Descendente</option>
            <option value = "mayorPeso">Desde Mayor Peso</option>
            <option value = "menorPeso">Desde Menor Peso</option>
          </select>
          <h3>Filtrar:</h3>
          <select name = "filtrar" onChange={handleChange}>
            <option value = "nada">--------</option>
            <option value = "todos">Todos</option>
            <option value = "api">Api</option>
            <option value = "database">Base de Datos</option>

          </select>
          <h3>Temperamento:</h3>
          <select name = "temperaments" onChange={handelSelect}> 
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