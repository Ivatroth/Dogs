const { Router } = require("express");
//const createTemperament = require("../controllers/createTemperament");

const temperamentsRouter = Router();

// 📍 GET | /temperaments
// Obtiene todos los temperamentos existentes.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). 
// Luego de obtenerlos de la API, deben ser guardados en la base de datos para su 
// posterior consumo desde allí.

temperamentsRouter.get("/", async (req, res) => {
    try {
        const temperamentos = await getTemperaments();
        res.status(200).json(temperamentos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// //! ESTE ES PROVISORIO SOLO PARA CARGAR LA TABLA

// temperamentsRouter.post("/", async (req, res) => {
//     try {
//       const {temperaments} = req.body;
//       const temp = await createTemperament(temperaments);
//       res.status(200).json({response: temp});
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   });

module.exports = temperamentsRouter;