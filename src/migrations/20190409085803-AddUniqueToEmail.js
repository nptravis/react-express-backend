'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
      unique: true
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
      unique: false
    })
  }
}
