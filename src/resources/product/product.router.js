import { Router } from 'express'
import { getInfo, getAll } from './product.controller'

const router = Router()

router.route('/').get(getAll)

router.route('/:id').get(getInfo)

export default router
