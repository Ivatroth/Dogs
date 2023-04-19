import './home.css';
import SearchBar from '../../components/search-bar/SearchBar';
import Cards from '../../components/cards/Cards';
import  {getNameDogs, filterCards, orderCards, getAllDogs,getTemperaments} from '../../redux/actions'
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect } from 'react';

//! VER LO DE LAS VALIDACIONES
//! FILTROS
//! CSS

function Home() {
  // la forma en que le comunico al reducer una actions es con un dispatch.
  const dispatch = useDispatch(); 

  // El estado para los Dogs, cuando este cambia, es enviado a todos los componentes que estan subscriptos a el.
  // Con el useSelector se hace la subscripcion de este componente al estado global, pero indicandole a cual subEstado, en este caso allDogs.
  let allDogs = useSelector((state) => state.allDogs);
  let allTemperaments = useSelector((state) => state.allTemperaments);

  const clearState = () => {
    allDogs = [];
    allTemperaments = [];
  }

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
    //antes de salir del componente se debe limpiar el estado
    return(() => {
      clearState() // ver en la clase de jorge
    })
  }, [dispatch] )

  const onSearch = (searchName) => {
    dispatch(getNameDogs(searchName));
  }

  function handleFilterChange(event) {
    event.preventDefault();
    dispatch(filterCards(event.target.value));
  }
  
  function handleOrderChange(event) {
    event.preventDefault();
    dispatch(orderCards(event.target.value));
  }


  return (
    <div className="home">
      <div></div>
      <div className='menu'>
        <SearchBar onSearch ={onSearch}/>
        <div className='selects'>
          <h3>Ordenar:</h3>
          <select name = "ordena" onChange={handleOrderChange}>
            <option value = "Ascendente">Ascendente</option>
            <option value = "Descendente">Descendente</option>
            <option value = "mayorPeso">Desde Mayor Peso</option>
            <option value = "menorPeso">Desde Menor Peso</option>
          </select>
          <h3>Origen:</h3>
          <select name = "filtrar" onChange={handleFilterChange}>
            <option value = "todos">Todos</option>
            <option value = "api">Api</option>
            <option value = "database">Base de Datos</option>

          </select>
          <h3>Temperamento:</h3>
          <select name = "temperaments" > 
            {
              allTemperaments.map((temp) => {
                return (<option>{temp}</option>)
              })
            }
          </select>
        </div>
      </div>
      <div>
        <Cards allDogs={allDogs}/>
      </div>
      
    </div>
  );
}

export default Home;