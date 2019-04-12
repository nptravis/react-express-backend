import db from '../../models/index'

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

export const getAll = (req, res) => {
  db.sequelize
    .query('SELECT * FROM product')
    .then(([results, metadata]) => {
      res.status(200).json(results)
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({ error: 'resource not found' })
    })
}
