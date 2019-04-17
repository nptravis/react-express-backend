import db from '../../models/index'
import { crudControllers } from '../../utils/crud'

export const crud = crudControllers(db.attribute_value)

export const getAttributeValuesById = (req, res) => {
  db.sequelize
    .query('CALL catalog_get_attribute_values(:id)', {
      replacements: { id: req.params.id },
      type: db.sequelize.QueryTypes.CALL
    })
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json(err)
    })
}
