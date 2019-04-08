'use strict'
import bcrypt from 'bcrypt'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }
    // {
    //   hooks: {
    //     beforeCreate: (user, options) => {
    //       user.password = bcrypt.hash(user.password, bcrypt.genSaltSync(8))
    //     }
    //   },
    //   instanceMethods: {
    //     validPassword(password) {
    //       const passwordHash = this.password
    //       return new Promise((resolve, reject) => {
    //         bcrypt.compare(password, passwordHash, (err, same) => {
    //           if (err) {
    //             return reject(err)
    //           }

    //           resolve(same)
    //         })
    //       })
    //     }
    //   }
    // }
  )
  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
