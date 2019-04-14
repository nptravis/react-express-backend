import db from '../../models/index'
import { crudControllers } from '../../utils/crud'

export const crud = crudControllers(db.department)

export const getCategories = (req, res) => {
  db.sequelize
    .query('CALL catalog_get_department_categories(:id)', {
      replacements: { id: req.params.id },
      type: db.sequelize.QueryTypes.RAW
    })
    .then(([results, metadata]) => {
      res.status(200).json(results)
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({ error: 'resource not found' })
    })
}
