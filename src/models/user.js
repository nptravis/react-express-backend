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
      validate: { isEmail: true },
      unique: true
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

  User.prototype.validatePassword = function(plainPassword) {
    const passwordHash = this.password
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainPassword, passwordHash, (err, same) => {
        if (err) {
          return reject(err)
        }
        resolve(same)
      })
    })
  }

  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
