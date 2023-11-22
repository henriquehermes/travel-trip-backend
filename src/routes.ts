import { Router } from "express"
import {
	CreateAmenityController,
	DeleteAmenityController,
	GetAllAmenityController,
	UpdateAmenityController,
} from "./controllers/Amenity"
import {
	CreateMarkerController,
	DeleteMarkerController,
	GetAllMarkersController,
	GetMarkerByIdController,
	UpdateMarkerController,
} from "./controllers/Marker"
import { CreateUserController, UpdateUserController } from "./controllers/User"

export const routes = Router()

routes.get("/v1/amenities", new GetAllAmenityController().handle)
routes.post("/v1/amenity", new CreateAmenityController().handle)
routes.delete("/v1/amenity/:id", new DeleteAmenityController().handle)
routes.put("/v1/amenity/:id", new UpdateAmenityController().handle)

routes.post("/v1/marker", new CreateMarkerController().handle)
routes.get("/v1/markers", new GetAllMarkersController().handle)
routes.get("/v1/marker/:id", new GetMarkerByIdController().handle)
routes.delete("/v1/marker/:id", new DeleteMarkerController().handle)
routes.put("/v1/marker/:id", new UpdateMarkerController().handle)

routes.post("/v1/user", new CreateUserController().handle)
routes.put("/v1/user/:id", new UpdateUserController().handle)
