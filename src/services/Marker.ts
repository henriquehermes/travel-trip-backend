import { Marker } from "../entities/Marker"
import { IMarker } from "../interfaces/MarkerInterfaces"
import { AmenityRepository } from "../repositories/AmenityRepository"
import { MarkerRepository } from "../repositories/MarkerRepository"
import { UserRepository } from "../repositories/UserRepository"

export class CreateMarkerService {
	async execute(markerData: IMarker): Promise<Marker | Error> {
		if (!markerData.latitude) throw new Error("Latitude is required")
		if (!markerData.longitude) return new Error("Longitude is required")
		if (!markerData.type) return new Error("Type is required")
		if (!markerData.amenities) return new Error("Amenities is required")

		const user = await UserRepository.findOne({
			where: { id: markerData.user_id },
		})

		if (!user) return new Error("User not found")

		const Marker = MarkerRepository.create(markerData)

		await MarkerRepository.save(Marker)

		return Marker
	}
}

export class GetAllMarkerService {
	async execute(): Promise<Marker[] | Error> {
		const markers = await MarkerRepository.find()

		if (markers.length > 0) {
			await Promise.all(
				markers.map(async (marker) => {
					// Fetch amenities for each marker asynchronously
					// @ts-ignore
					marker.amenities = await Promise.all(
						marker.amenities.map(async (amenityId) => {
							const amenityResult = await AmenityRepository.findOneBy({
								id: amenityId,
							})

							return amenityResult || ""
						})
					)
				})
			)
		}

		return markers
	}
}

export class GetMarkerByIdService {
	async execute({ id }: Pick<IMarker, "id">): Promise<Marker | Error> {
		const marker = await MarkerRepository.findOneBy({ id })

		if (!marker) return new Error("Marker not found")

		// @ts-ignore
		marker.amenities = await Promise.all(
			marker.amenities.map(async (amenityId) => {
				const amenityResult = await AmenityRepository.findOneBy({
					id: amenityId,
				})

				return amenityResult || ""
			})
		)

		return marker
	}
}

export class DeleteMarkerService {
	async execute({ id }: Pick<IMarker, "id">): Promise<boolean | Error> {
		const marker = await MarkerRepository.findOneBy({ id })

		if (!marker) {
			return new Error("Marker not found")
		}

		await MarkerRepository.delete({ id })

		return true
	}
}

export class UpdateMarkerService {
	async execute(markerData: IMarker): Promise<Marker | Error> {
		const marker = await MarkerRepository.findOneBy({ id: markerData.id })

		if (!marker) {
			return new Error("Marker not found")
		}

		marker.latitude = markerData.latitude ?? marker.latitude
		marker.longitude = markerData.longitude ?? marker.longitude
		marker.notes = markerData.notes ?? marker.notes
		marker.favorite = markerData.favorite ?? marker.favorite
		marker.pin_color = markerData.pin_color ?? marker.pin_color
		marker.type = markerData.type ?? marker.type
		marker.user_id = markerData.user_id ?? marker.user_id
		marker.amenities = markerData.amenities ?? marker.amenities

		await MarkerRepository.save(marker)

		return marker
	}
}
