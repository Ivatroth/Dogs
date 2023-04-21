import './home.css';
import SideBar from '../../components/sidebar/SideBar';
import Cards from '../../components/cards/Cards';
import  {getNameDogs, filterCards, orderCards, getAllDogs,getTemperaments, filtarXTemper} from '../../redux/actions'
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Paginado } from '../../components/paginado/paginado';


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

  function handelChange(event){
    // event.preventDefault();
    console.log(event.target.name);
    if(event.target.name === 'filtrar') dispatch(filterCards(event.target.value));
    else dispatch(orderCards(event.target.value));
  

  }
  const handelSelect = (event) => {
    dispatch(filtarXTemper(event.target.value));
  };
  


  return (
    <div className="conteiner">
      <div>
        <Paginado allDogs={allDogs.length}
                  dogsXPage={dogsXPage}
                  paginado={paginado} />
      </div>
      <div className="home">
        <div>
          <SideBar 
            onSearch = {onSearch} 
            handleChange={handelChange}
            handelSelect={handelSelect}
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