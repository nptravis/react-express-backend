import db from '../../models/index'
import { crudControllers } from '../../utils/crud'

export default crudControllers(db.department)
