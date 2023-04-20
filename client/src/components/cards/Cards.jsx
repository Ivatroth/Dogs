import './Cards.css';
import Card from '../card/Card';


const Cards = ({allDogs}) => {
  return (
    <div className='cards'>
      { allDogs?.map((dog) => {
        return (<Card dog = { dog }/>)
      })}
    </div>
  );
}

export default Cards;