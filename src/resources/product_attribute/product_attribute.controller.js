import db from '../../models/index'
import { crudControllers } from '../../utils/crud'

export const crud = crudControllers(db.product_attribute)

export const catalogGetProductAttributes = (req, res) => {
  db.sequelize
    .query('CALL catalog_get_product_attributes(:id)', {
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
