//! Funcion para Limpiar el objeto que viene de la API
//! y que coincida con la DB

const clearInfoApi = (arr) => arr.map((dog) => {
    return {
        id: dog.id,
        name: dog.name,
        image: dog.image.url,
        height:dog.height.metric,
        weight: dog.weight.metric,
        life_span: dog.life_span,
        temperament: dog.temperament,
        created: false,

    }
});
module.exports = clearInfoApi;