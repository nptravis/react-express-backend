import Sequelize from 'sequelize'
import options from '../config'

// export const connect = (url = options.dbUrl, opts = {}) => {
//   return mongoose.connect(url, { ...opts, useNewUrlParser: true })
// }



// Option 2: Using a connection URI
export const sequelize = new Sequelize(options.dbUrl);