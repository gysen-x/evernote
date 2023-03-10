const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    static associate(models) {
      this.belongsTo(models.Notebook, { foreignKey: 'notebook_id' });
      this.belongsToMany(models.Label, { through: models.Note_Label, foreignKey: 'note_id' });
    }
  }
  Note.init({
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    notebook_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};
