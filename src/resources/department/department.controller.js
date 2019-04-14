import db from '../../models/index'
import { crudControllers } from '../../utils/crud'

export const crud = crudControllers(db.department)

export const getCategories = (req, res) => {
  db.sequelize
    .query('SELECT * FROM category WHERE department_id = :id', {
      type: db.sequelize.QueryTypes.SELECT,
      replacements: { id: req.params.id }
    })
    .then(results => res.status(200).json(results))
    .catch(err => res.status(404).json(err))
}
