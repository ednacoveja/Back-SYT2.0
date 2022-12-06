const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    categories:{
      type:DataTypes.ARRAY(DataTypes.STRING)
    },
    archive: {
      type: DataTypes.STRING,
      allowNull:true
    },
    url:{
      type:DataTypes.STRING,
      allowNull:true
    },
    premium:{
      type: DataTypes.ENUM("Principiante", "Avanzado", "Experto"),
        allowNull: true,
    },
    likes:{
      type:DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull:true
    }
  });
};
