import { Request, Response } from "express"
import {
	CreateAmenityService,
	DeleteAmenityService,
	GetAllAmenityService,
	UpdateAmenityService,
} from "../services/Amenity"
import {
	amenityCreateSchema,
	amenityDeleteSchema,
	amenitySchema,
} from "../schemas/AmenitySchema"

export class CreateAmenityController {
	async handle(request: Request, response: Response) {
		const { name } = request.body

		const { error } = amenityCreateSchema.validate(name)

		if (error) {
			return response.status(400).json({ error: "Missing or invalid name" })
		}

		const service = new CreateAmenityService()

		const result = await service.execute({ name })

		if (result instanceof Error) {
			return response.status(400).json({ error: result.message })
		}

		return response.status(201).json(result)
	}
}

export class GetAllAmenityController {
	async handle(request: Request, response: Response) {
		const service = new GetAllAmenityService()

		const result = await service.execute()

		if (result instanceof Error) {
			return response.status(400).json({ error: result.message })
		}

		return response.status(201).json(result)
	}
}

export class DeleteAmenityController {
	async handle(request: Request, response: Response) {
		const { id } = request.params

		const { error } = amenityDeleteSchema.validate(id)

		if (error) {
			return response.status(400).json({ error: "Missing or invalid id" })
		}

		const service = new DeleteAmenityService()

		const result = await service.execute({ id })

		if (result instanceof Error) {
			return response.status(400).json({ error: result.message })
		}

		return response.status(204).end()
	}
}

export class UpdateAmenityController {
	async handle(request: Request, response: Response) {
		const { id } = request.params
		const { name } = request.body

		const { error } = amenitySchema.validate({
			id,
			name,
		})

		if (error) {
			return response.status(400).json({ error: "Missing properties" })
		}

		const service = new UpdateAmenityService()

		const result = await service.execute({ id, name })

		if (result instanceof Error) {
			return response.status(400).json({ error: result.message })
		}

		return response.status(201).json(result)
	}
}
