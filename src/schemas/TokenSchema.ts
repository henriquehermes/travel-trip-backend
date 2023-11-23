import Joi from "joi"

const refreshTokenSchema = Joi.string().guid({
	version: ["uuidv4"],
})

export { refreshTokenSchema }
