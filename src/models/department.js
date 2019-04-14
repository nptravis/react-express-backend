/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const dept = sequelize.define(
    'department',
    {
      department_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'null'
      },
      description: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        comment: 'null'
      }
    },
    {
      tableName: 'department',
      timestamps: false
    }
  )
  dept.association = function(db) {
    dept.hasMany(db.category)
  }
  return dept
}
