import { Router } from 'express'
import { getOne, getAll } from './product.controller'

const router = Router()

router.route('/').get(getAll)

router.route('/:id').get(getOne)

export default router
