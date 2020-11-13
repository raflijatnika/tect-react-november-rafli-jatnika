import Joi from 'joi'

const schema = Joi.object({
  username: Joi.string().min(2).required(),
  password: Joi.string().min(2).required(),
})

export default schema
