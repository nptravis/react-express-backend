import db from '../../models/index'

export const getOne = (req, res) => {
  // const sequelize = db.sequelize
  db.sequelize
    .query('SELECT * FROM product WHERE product_id = :id', {
      replacements: { id: req.params.id },
      type: db.sequelize.QueryTypes.SELECT
    })
    .then(([results, metadata]) => {
      res.status(200).json({ data: results })
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
      res.status(200).json({ data: results })
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({ error: 'resource not found' })
    })
}
