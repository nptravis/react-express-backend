import config from '../config'
import jwt from 'jsonwebtoken'
import db from '../models/index'

export const newToken = user => {
  return jwt.sign({ id: user.id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  })
}

export const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })

export const signup = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: 'must supply email and password' })
  }

  db.user
    .create(req.body)
    .then(user => {
      const token = newToken(user)
      res.status(201).send({ token })
    })
    .catch(err => {
      console.log(err)
      return res.status(400).json({ data: err })
    })
}

export const signin = async (req, res) => {
  // if (!req.body.email || !req.body.password) {
  //   return res.status(400).send({ message: 'must supply email and password' })
  // }
  // const user = await User.findOne({ email: req.body.email }).exec()
  // if (!user) {
  //   return res.status(401).send({ message: 'not Auth' })
  // }
  // try {
  //   const match = await user.checkPassword(req.body.password)
  //   if (!match) {
  //     return res.status(401).send({ message: 'not Auth' })
  //   }
  //   const token = newToken(user)
  //   return res.status(201).send({ token })
  // } catch (err) {
  //   console.log(err)
  //   return res.status(400).send({ message: 'not Auth' })
  // }
}

export const protect = async (req, res, next) => {
  // if (!req.headers.authorization) {
  //   return res.status(401).end()
  // }
  // let token = req.headers.authorization.split('Bearer ')[1]
  // if (!token) {
  //   return res.status(401).end()
  // }
  // try {
  //   const payload = await verifyToken(token)
  //   const user = await User.findById(payload.id)
  //     .select('-password')
  //     .lean()
  //     .exec()
  //   req.user = user
  //   next()
  // } catch (e) {
  //   console.log(e)
  //   return res.status(401).end()
  // }
}
