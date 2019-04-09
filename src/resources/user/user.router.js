import { Router } from 'express'
import { createUser } from './user.controllers'

const router = Router()

router.route('/').get((req, res) => {
  res.send({ message: 'ok' })
})

export default router
