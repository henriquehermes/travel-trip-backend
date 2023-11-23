import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

export function authentication(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const authToken = request.headers.authorization

	if (!authToken) {
		return response.status(401).json({
			message: "Invalid authorization",
		})
	}

	const [, token] = authToken.split(" ")

	try {
		verify(token, "cake-doggy-millie")
		return next()
	} catch (error) {
		return response.status(401).json({ message: error })
	}
}
