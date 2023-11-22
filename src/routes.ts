import { Router } from "express"
import {
	CreateAmenityController,
	DeleteAmenityController,
	GetAllAmenityController,
	UpdateAmenityController,
} from "./controllers/Amenity"

const routes = Router()

routes.post("/v1/amenity", new CreateAmenityController().handle)
routes.delete("/v1/amenity/:id", new DeleteAmenityController().handle)
routes.get("/v1/amenities", new GetAllAmenityController().handle)
routes.put("/v1/amenity/:id", new UpdateAmenityController().handle)

export { routes }
