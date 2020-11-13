import Joi from 'joi'

const schema = Joi.object({
  email: Joi.string().min(2).required(),
  username: Joi.string().min(2).required(),
  password: Joi.string().min(2).required(),
})

export default schema
