
const restaurarDogs = (PerrosDB) =>{
    const dogsDB = PerrosDB.map(dog => {
        let temp ='';
        dog.Temperaments.forEach(t => {
          temp = temp ?  temp +", "+ t.name : t.name ;
        });
        return ({
          id: dog.id,
          name: dog.name,
          image: dog.image,
          height: dog.height,
          weight: dog.weight,
          life_span: dog.life_span,
          temperament: temp,
        })
    });
    return dogsDB
}

module.exports = restaurarDogs;