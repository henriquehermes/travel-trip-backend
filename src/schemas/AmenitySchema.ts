import Joi from "joi"

const amenitySchema = Joi.object({
	id: Joi.string().uuid().required(),
	name: Joi.string().required(),
})

const amenityDeleteSchema = Joi.string().uuid().required()

const amenityCreateSchema = Joi.string().required()

export { amenitySchema, amenityDeleteSchema, amenityCreateSchema }
