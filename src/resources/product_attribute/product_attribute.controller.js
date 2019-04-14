import db from '../../models/index'
import { crudControllers } from '../../utils/crud'

export const crud = crudControllers(db.product_attribute)
