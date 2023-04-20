import './home.css';
import SideBar from '../../components/sidebar/SideBar';
import Cards from '../../components/cards/Cards';
import  {getNameDogs, filterCards, orderCards, getAllDogs,getTemperaments, filtarXTemper} from '../../redux/actions'
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
        <Cards allDogs={allDogs}/>
      </div>
      
    </div>
  );
}

export default Home;