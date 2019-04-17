import { Router } from 'express'
import { crud, getInfo, getAll } from './product.controller'

const router = Router()

router
  .route('/')
  .get(crud.getAll)
  .post(crud.createOne)

router
  .route('/:id')
  .get(getInfo)
  .put(crud.updateOne)
  .delete(crud.removeOne)

export default router
