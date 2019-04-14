import { Router } from 'express'
import { crud } from './category.controller'

const router = Router()

// /api/category
router
  .route('/')
  .get(crud.getAll)
  .post(crud.createOne)

// /api/category/:id
router
  .route('/:id')
  .get(crud.getOne)
  .put(crud.updateOne)
  .delete(crud.removeOne)

export default router
