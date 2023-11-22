import { AppDataSource } from "../database/data-source"
import { Amenity } from "../entities/Amenity"

export const AmenityRepository = AppDataSource.getRepository(Amenity)
