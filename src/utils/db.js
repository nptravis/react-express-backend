import Sequelize from 'sequelize'
import options from '../config'

export const sequelize = new Sequelize(options.dbUrl)
