import Joi from 'joi'

const schema = Joi.object({
  itemName: Joi.string().min(2).required()
})

export default schema
