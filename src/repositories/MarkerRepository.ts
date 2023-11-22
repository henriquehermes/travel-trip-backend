import { AppDataSource } from "../database/data-source"
import { Marker } from "../entities/Marker"

export const MarkerRepository = AppDataSource.getRepository(Marker)
