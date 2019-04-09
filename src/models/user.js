'use strict'
import bcrypt from 'bcrypt'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    }
  })
  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 8).then(hashedPw => {
      user.password = hashedPw
    })
  })

  User.prototype.validatePassword = (plainTextPassword, hash) => {
    return bcrypt.compare(plainTextPassword, hash).then(function(res) {
      res == true
    })
  }

  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
