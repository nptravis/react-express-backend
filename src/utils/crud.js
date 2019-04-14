export const getOne = model => (req, res) => {
  model
    .findByPk(req.params.id)
    .then(instance => {
      res.status(200).json(instance)
    })
    .catch(err => res.status(400).json(err))
}

export const getAll = model => (req, res) => {
  model
    .findAll()
    .then(instances => {
      res.status(200).json(instances)
    })
    .catch(err => res.status(400).json(err))
}

export const createOne = model => (req, res) => {
  model
    .create(req.body)
    .then(instance => {
      res.status(201).json(instance)
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

export const updateOne = model => (req, res) => {
  const obj = {}
  obj[model.name + '_id'] = req.params.id
  model
    .update(req.body, { where: obj })
    .then(instance => {
      res.status(201).json(instance)
    })
    .catch(err => {
      res.statsu(400).json(err)
    })
}

export const removeOne = model => (req, res) => {
  const obj = {}
  obj[model.name + '_id'] = req.params.id
  model
    .destroy({ where: obj })
    .then(instance => {
      res.status(201).json(instance)
    })
    .catch(err => {
      res.statsu(400).json(err)
    })
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getAll: getAll(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
