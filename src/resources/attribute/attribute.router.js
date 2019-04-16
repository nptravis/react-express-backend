import { Router } from 'express'
import { crud } from './attribute.controller'

const router = Router()

// /api/attribute
router
  .route('/')
  .get(crud.getAll)
  .post(crud.createOne)

// /api/attribute/:id
router
  .route('/:id')
  .get(crud.getOne)
  .put(crud.updateOne)
  .delete(crud.removeOne)

export default router
