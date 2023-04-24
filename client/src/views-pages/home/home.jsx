import './home.css';
import SideBar from '../../components/sidebar/SideBar';
import Cards from '../../components/cards/Cards';
import  {getNameDogs, filterCards, getAllDogs,getTemperaments} from '../../redux/actions'
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Paginado } from '../../components/paginado/paginado';
import { Ordenar, FiltraXTemp } from './filtrarYordenar.jsx';


//!Componente
function Home() {
  // la forma en que le comunico al reducer una actions es con un dispatch.
  const dispatch = useDispatch(); 

  // El estado para los Dogs, cuando este cambia, es enviado a todos los componentes que estan subscriptos a el.
  // Con el useSelector se hace la subscripcion de este componente al estado global, pero indicandole a cual subEstado, en este caso allDogs.
  let allDogs = useSelector((state) => state.allDogs);
  let allTemperaments = useSelector((state) => state.allTemperaments);
  //estados locales para manejar y mostrar los filtros
  const [searchF, setSearchF] = useState("Todo");
  const [searchO, setSearchO] = useState("Sin Orden");
  const [searchT, setSearchT] = useState("Todos");
  // estado local que me guarda la pagina actual
  const [currentPage, setCurrentPage] = useState(1);
  // constante que me guarda la cantidad de dogs por pagina
  const dogsXPage = 8;
  // indice del ultimo Dog de la pagina actual
  const indexLastDog = currentPage * dogsXPage;
  // indice del primer dog de la pagina actual
  const indexFirstDog = indexLastDog - dogsXPage;
  // array de los dog actuales en esta pagina
  const currentDogs = allDogs.slice(indexFirstDog, indexLastDog);
  
  const paginado = (numPagina) => {
    setCurrentPage(numPagina)
  }
  
  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
    setSearchF("Todos");
    setSearchO("Sin Orden");
    setSearchT("Todos")
    paginado(1);
    //antes de salir del componente se debe limpiar el estado
    // return(() => {
    //   dispatch(deleteAll()) 
    // })
  }, [dispatch] )

  const onSearch = (searchName) => {
    setSearchF(searchName);
    dispatch(getNameDogs(searchName));
    setSearchO("Sin Orden");
    setSearchT("Todos")
  }

  function handelChange(event){
    event.preventDefault();
    paginado(1);
    if(event.target.name === 'filtrar'){
      setSearchF(event.target.value);
      //!ACA hacer otra funcion fuera y n todas mandarce los estados locales
      //!Mejor cuando ordeno pongo los temperamentos en todos
      //!
      dispatch(filterCards(event.target.value));
    }
    else if(event.target.name === 'ordena') {
      Ordenar(event.target.value, searchF, setSearchO, dispatch, allDogs);
    } else {
      FiltraXTemp(event.target.value, searchF, searchO, setSearchT, setSearchO, dispatch, allDogs)
    }
  }
  
  return (
    <div className="conteiner">
      <div className='paginado'>
        <Paginado allDogs={allDogs.length}
                  dogsXPage={dogsXPage}
                  paginado={paginado} />
        <h1>{currentPage}</h1>
      </div>
      <div className="home">
        <div className="sidebar"> 
        
          <SideBar 
            searchF = {searchF}
            searchO = {searchO}
            searchT = {searchT}
            onSearch = {onSearch} 
            handleChange={handelChange}
            allTemperaments ={allTemperaments}
          />
        </div>

        <div>
          <Cards allDogs={currentDogs}/>
        </div>
        
      </div>
    </div>
  );
}

export default Home;