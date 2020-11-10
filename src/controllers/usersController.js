import md5 from 'md5'
import usersModel from '../models/usersModel'

async function createUser(req, res) {
  try {
    await usersModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.GLOBAL_SALT_KEY),
    })

    return res.status(201).send({ message: 'User Created whit success!' })
  } catch (error) {
    return res.status(400).send({ Message: 'Erro, ta tudo cagado!', error })
  }
}

async function getAll(req, res) {
  try {
    const data = await usersModel.find()

    return res.status(200).send({ data })
  } catch (error) {
    return res.status(400).send({ Message: 'Erro na busca!', error })
  }
}

async function updateUser(req, res) {
  try {
    await usersModel.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password, process.env.GLOBAL_SALT_KEY),
      },
    })

    return res.status(201).send({ Message: 'Deu certo o Update!' })
  } catch (error) {
    return res.status(400).send({ Message: 'ERRO, ta tudo cagado!', error })
  }
}
async function deleteUser(req, res) {
  try {
    await usersModel.findOneAndDelete(req.params.id)
    return res.status(201).send({ message: 'Deu Tudo Certo e apagado!' })
  } catch (error) {
    return res.status(400).json({ Message: 'ERRo!! esta tudo cagado!', error })
  }
}

export default { createUser, getAll, deleteUser, updateUser }
