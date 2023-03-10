const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Note, { through: models.Note_Label, foreignKey: 'label_id' });
    }
  }
  Label.init({
    title: DataTypes.STRING,
    color: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Label',
  });
  return Label;
};
