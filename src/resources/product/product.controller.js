import db from '../../models/index'
import { crudControllers } from '../../utils/crud'

export const crud = crudControllers(db.product)

export const getInfo = (req, res) => {
  db.sequelize
    .query('CALL catalog_get_product_info(:id)', {
      replacements: { id: req.params.id },
      type: db.sequelize.QueryTypes.CALL
    })
    .then(([results, metadata]) => {
      res.status(200).json(results)
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({ error: 'resource not found' })
    })
}
