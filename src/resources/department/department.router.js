import { Router } from 'express'
import { crud, getCategories } from './department.controller'

const router = Router()

// /api/department
router
  .route('/')
  .get(crud.getAll)
  .post(crud.createOne)

// /api/item/:id
router
  .route('/:id')
  .get(crud.getOne)
  .put(crud.updateOne)
  .delete(crud.removeOne)

router.route('/:id/category').get(getCategories)

export default router
