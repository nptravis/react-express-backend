import { Router } from 'express'
import { crud } from './product_category.controller'

const router = Router()

router
  .route('/')
  .get(crud.getAll)
  .post(crud.createOne)

router
  .route('/:id')
  .get(crud.getOne)
  .put(crud.updateOne)
  .delete(crud.removeOne)

export default router
