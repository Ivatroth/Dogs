import './home.css';
import SideBar from '../../components/sidebar/SideBar';
import Cards from '../../components/cards/Cards';
import  {getNameDogs, filtarXTemper, filterCards, orderCards} from '../../redux/actions';
import { useDispatch ,useSelector } from 'react-redux';
import { useState } from 'react';
import { Paginado } from '../../components/paginado/paginado';


function Home() {
  // la forma en que le comunico al reducer una actions es con un dispatch.
  const dispatch = useDispatch(); 
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
  //cantidad de paginas totales
  const [pages] = useState(Math.round(allDogs.length / dogsXPage));
  
  const paginado = (numPagina) => {
    setCurrentPage(numPagina)
  }
  function goToNextPage() {
    setCurrentPage(currentPage + 1);
  }
  function goToPreviousPage() {
    setCurrentPage(currentPage - 1);
  }
  
  const onSearch = (searchName) => {
    dispatch(getNameDogs(searchName));
    setSearchF("Todos");
    setSearchO("Sin Orden");
    setSearchT("Todos")
    paginado(1);
  }

  const handelChange = (event) => {
    event.preventDefault();
    // paginado(1);
    if(event.target.name === 'filtrar'){
      setSearchF(event.target.value);
      setSearchO("Sin Orden");
      setSearchT("Todos");
      dispatch(filterCards(event.target.value));
  
    }
    else if (event.target.name === 'temperaments'){
      setSearchF('Todos');
      setSearchT(event.target.value);
      setSearchO('Sin Orden');
      dispatch(filtarXTemper(event.target.value));

    }
    else {
      setSearchO(event.target.value);
      setSearchT("Todos");
      dispatch(orderCards(event.target.value));

    } 
  }
  
  return (
    <div className="conteiner">
      <div className='paginado'>
        <Paginado allDogs={allDogs.length}
                  dogsXPage={dogsXPage}
                  paginado={paginado} />
        <button onClick={goToPreviousPage} className= 'prev' disabled = {currentPage === 1 ? true : false}>
          prev
        </button>          
        <span>{currentPage}</span>
        <button onClick={goToNextPage} className='next' disabled = {currentPage === pages ? true : false}>
            next
        </button>
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