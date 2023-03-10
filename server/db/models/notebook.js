const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Notebook extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.hasMany(models.Note, { foreignKey: 'notebook_id' });
    }
  }
  Notebook.init({
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Notebook',
  });
  return Notebook;
};
