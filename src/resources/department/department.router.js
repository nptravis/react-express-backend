import { Router } from 'express'
import controllers from './department.controller'

const router = Router()

// /api/department
router
  .route('/')
  .get(controllers.getAll)
  .post(controllers.createOne)

// /api/item/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
