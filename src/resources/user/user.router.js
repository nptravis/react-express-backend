import { Router } from 'express'
import { createUser } from './user.controllers'

const router = Router()

router.post('/signup', createUser)

export default router
