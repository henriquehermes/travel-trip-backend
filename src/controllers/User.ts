import { Request, Response } from "express"
import {
	AuthenticateUserService,
	CreateUserService,
	UpdateUserService,
} from "../services/User"

export class CreateUserController {
	async handle(request: Request, response: Response) {
		const { first_name, last_name, email, password } = request.body

		const service = new CreateUserService()

		const result = await service.execute({
			first_name,
			last_name,
			email,
			password,
		})

		if (result instanceof Error) {
			return response.status(400).json({ error: result.message })
		}

		return response.status(201).json(result)
	}
}

export class UpdateUserController {
	async handle(request: Request, response: Response) {
		const { id } = request.params
		const { first_name, last_name, email } = request.body

		const service = new UpdateUserService()

		const result = await service.execute({ id, first_name, last_name, email })

		if (result instanceof Error) {
			return response.status(400).json({ error: result.message })
		}

		return response.status(201).json(result)
	}
}

export class AuthenticateUserController {
	async handle(request: Request, response: Response) {
		const { email, password } = request.body

		const service = new AuthenticateUserService()

		const result = await service.execute({ email, password })

		if (result instanceof Error) {
			return response.status(400).json({ error: result.message })
		}

		return response.status(201).json(result)
	}
}
