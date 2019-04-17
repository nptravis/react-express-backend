import { Router } from 'express'
import { crud, getAttributeValuesById } from './attribute_value.controller'

const router = Router()

// /api/attribute_value
router
  .route('/')
  .get(crud.getAll)
  .post(crud.createOne)

// /api/attribute_value/:id
router
  .route('/:id')
  .get(crud.getOne)
  .put(crud.updateOne)
  .delete(crud.removeOne)

router.get('/catalog_get_attribute_values/:id', getAttributeValuesById)

export default router
