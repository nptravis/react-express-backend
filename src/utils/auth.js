import config from '../config'
import jwt from 'jsonwebtoken'
import db from '../models/index'
import bcrypt from 'bcrypt'

export const newToken = user => {
  return jwt.sign({ id: user.id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  })
}

export const verifyToken = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err)
      return resolve(payload)
    })
  })
}

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
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: 'must supply email and password' })
  }

  const user = await db.user.findOne({ where: { email: req.body.email } })

  if (!user) {
    return res.status(401).send({ message: 'user not found' })
  }

  try {
    const match = await user.validatePassword(req.body.password)

    if (!match) {
      return res.status(401).send({ message: 'password not valid' })
    }

    const token = newToken(user)
    return res.status(201).send({ token })
  } catch (err) {
    console.log(err)
    return res.status(400).send({ message: 'hmm...maybe try again' })
  }
}

export const protect = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end()
  }
  let token = req.headers.authorization.split('Bearer ')[1]
  if (!token) {
    return res.status(401).end()
  }

  verifyToken(token)
    .then(payload => {
      db.user
        .findByPk(payload.id)
        .then(user => {
          req.user = user
          next()
        })
        .catch(err => {
          console.log(err)
          res.status(401).json({ data: err })
        })
    })
    .catch(err => {
      console.log(err)
      res.status(401).json({ data: err })
    })
}
