import { User } from '../../models/user'

export const createUser = (req, res) => {
  const user = User.create(req.body)
    .then(user => {
      res.status(200).json({ data: user })
    })
    .catch(err => res.status(400).json({ data: err }))
}
