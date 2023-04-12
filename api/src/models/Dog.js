const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      //url
        type: DataTypes.STRING,

    },
    height: {
        //rango de altura --> "metric": "23 - 29"
        type: DataTypes.STRING,

    },
    weight: {
        //rango peso --> "metric": "3 - 6"
        type: DataTypes.STRING,

    },
    life_span: {
      //rango de esperanza de vida --> "life_span": "10 - 12 years",
        type: DataTypes.STRING,

    }
  }, {
    timestamps : false,
  });
};
