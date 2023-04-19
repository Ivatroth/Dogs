
export const restauraDog = (input) => {
//crear un objeto para debolverlo
const dog = {
    name: input.name,
    image: input.image,
    height: input.heightmin.toString() + " - " +input.heightmax.toString(),
    weight: input.weightmin.toString() + " - " +input.weightmax.toString(),
    life_span: input.life_span_min.toString() + " - " +input.life_span_max.toString(),
    temperament: input.temperament,
  }

return dog

}