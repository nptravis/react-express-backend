import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { sequelize } from './utils/db'
import productRouter from './resources/product/product.router'
import departmentRouter from './resources/department/department.router'
import categoryRouter from './resources/category/category.router'
import productAttributeRouter from './resources/product_attribute/product_attribute.router'
import attributeRouter from './resources/attribute/attribute.router'
import attributeValueRouter from './resources/attribute_value/attribute_value.router'
import productCategoryRouter from './resources/product_category/product_category.router'
import catalogDataRouter from './resources/catalog_data/catalog_data.router'
// import itemRouter from './resources/item/item.router'
// import listRouter from './resources/list/list.router'
import { signup, signin, protect } from './utils/auth'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// Public API
app.use('/api/product', productRouter)
app.use('/api/product_attribute', productAttributeRouter)
app.use('/api/product_category', productCategoryRouter)
app.use('/api/department', departmentRouter)
app.use('/api/category', categoryRouter)
app.use('/api/attribute', attributeRouter)
app.use('/api/attribute', attributeRouter)
app.use('/api/attribute_value', attributeValueRouter)
app.use('/api/catalog_data', catalogDataRouter)

// Auth Routes
app.post('/signup', signup)
app.post('/signin', signin)

// Protected Routes
app.use('/user/:id', protect)
// app.get('user/:id/cart', cartRouter)

export const start = async () => {
  try {
    await sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.')
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err)
      })
    // await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
