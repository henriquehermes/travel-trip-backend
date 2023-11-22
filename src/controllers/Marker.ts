import { Request, Response } from "express"
import {
	CreateMarkerService,
	DeleteMarkerService,
	GetAllMarkerService,
	GetMarkerByIdService,
	UpdateMarkerService,
} from "../services/Marker"
import { IMarker } from "../interfaces/MarkerInterfaces"

export class CreateMarkerController {
	async handle(request: Request, response: Response) {
		const marker = <IMarker>request.body

		const service = new CreateMarkerService()

		const result = await service.execute(marker)

		if (result instanceof Error) {
			return response.status(400).json({ error: result.message })
		}

		return response.status(201).json(result)
	}
}

export class GetAllMarkersController {
	async handle(request: Request, response: Response) {
		const service = new GetAllMarkerService()

		const result = await service.execute()

		if (result instanceof Error) {
			return response.status(400).json({ error: result.message })
		}

		return response.status(201).json(result)
	}
}

export class GetMarkerByIdController {
	async handle(request: Request, response: Response) {
		const { id } = request.params
		const service = new GetMarkerByIdService()

		const result = await service.execute({ id })

		if (result instanceof Error) {
			return response.status(400).json({ error: result.message })
		}

		return response.status(201).json(result)
	}
}

export class DeleteMarkerController {
	async handle(request: Request, response: Response) {
		const { id } = request.params

		const service = new DeleteMarkerService()

		const result = await service.execute({ id })

		if (result instanceof Error) {
			return response.status(400).json({ error: result.message })
		}

		return response.status(204).end()
	}
}

export class UpdateMarkerController {
	async handle(request: Request, response: Response) {
		const { id } = request.params
		const {
			amenities,
			notes,
			favorite,
			latitude,
			longitude,
			pin_color,
			type,
			user_id,
			created_at,
		} = <IMarker>request.body

		const service = new UpdateMarkerService()

		const result = await service.execute({
			id,
			amenities,
			notes,
			favorite,
			latitude,
			longitude,
			pin_color,
			type,
			user_id,
			created_at,
		})

		if (result instanceof Error) {
			return response.status(400).json({ error: result.message })
		}

		return response.status(201).json(result)
	}
}
