import { Amenity } from "../entities/Amenity"
import { AmenityRepository } from "../repositories/AmenityRepository"

type AmenityRequestProps = {
	id?: string
	name?: string
}

export class CreateAmenityService {
	async execute({ name }: AmenityRequestProps): Promise<Amenity | Error> {
		if (await AmenityRepository.findOneBy({ name })) {
			return new Error("Amenity already exists")
		}

		if (!name) {
			return new Error("Name is required")
		}

		const Amenity = AmenityRepository.create({
			name,
		})

		await AmenityRepository.save(Amenity)

		return Amenity
	}
}

export class GetAllAmenityService {
	async execute(): Promise<Amenity[] | Error> {
		const amenities = await AmenityRepository.find()

		return amenities
	}
}

export class DeleteAmenityService {
	async execute({ id }: AmenityRequestProps): Promise<boolean | Error> {
		const amenity = await AmenityRepository.findOneBy({ id })

		if (!amenity) {
			return new Error("Amenity not found")
		}

		await AmenityRepository.delete({ id })

		return true
	}
}

export class UpdateAmenityService {
	async execute({ id, name }: AmenityRequestProps): Promise<Amenity | Error> {
		const amenity = await AmenityRepository.findOneBy({ id })

		if (!amenity) {
			return new Error("Amenity not found")
		}

		amenity.name = name ?? amenity.name

		await AmenityRepository.save(amenity)

		return amenity
	}
}
