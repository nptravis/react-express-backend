import db from '../../models/index'

export const getCatalogData = async (req, res) => {
  try {
    let data = {
      departments: await db.department.findAll(),
      categories: await db.category.findAll(),
      _attributes: await db.attribute.findAll(),
      attribute_values: await db.attribute_value.findAll(),
      products: await db.product.findAll(),
      product_attributes: await db.product_attribute.findAll(),
      product_categories: await db.product_category.findAll()
    }

    res.status(200).json(data)
  } catch (err) {
    res.status(400).json(err)
  }
}
