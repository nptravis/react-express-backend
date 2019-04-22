import { Router } from 'express'
import { getCatalogData } from './catalog_data.controller'

const router = Router()

// /api/catalog_data
router.route('/').get(getCatalogData)

export default router
