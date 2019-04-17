import { Router } from 'express'
import {
  crud,
  catalogGetProductAttributes
} from './product_attribute.controller'

const router = Router()

router
  .route('/')
  .get(crud.getAll)
  .post(crud.createOne)

router
  .route('/:id')
  .get(catalogGetProductAttributes)
  .put(crud.updateOne)
  .delete(crud.removeOne)

export default router
