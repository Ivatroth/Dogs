import './Cards.css';
import Card from '../card/Card';


const Cards = ({allDogs}) => {
 //console.log(`Entro al componente Cards: ${allDogs}`);
  return (
    <div className='cards'>
      { allDogs?.map((dog) => {
        console.log("CARDS: "+dog.temperamen);
        return (<Card dog = { dog }/>)
      })}
    </div>
  );
}

export default Cards;