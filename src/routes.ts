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
import {
	AuthenticateUserController,
	CreateUserController,
	UpdateUserController,
} from "./controllers/User"
import { authentication } from "./middleware/authentication"
import { RefreshTokenController } from "./controllers/RefreshToken"

export const routes = Router()

routes.get(
	"/v1/amenities",
	authentication,
	new GetAllAmenityController().handle
)
routes.post("/v1/amenity", authentication, new CreateAmenityController().handle)
routes.delete(
	"/v1/amenity/:id",
	authentication,
	new DeleteAmenityController().handle
)
routes.put(
	"/v1/amenity/:id",
	authentication,
	new UpdateAmenityController().handle
)

routes.post("/v1/marker", authentication, new CreateMarkerController().handle)
routes.get("/v1/markers", authentication, new GetAllMarkersController().handle)
routes.get(
	"/v1/marker/:id",
	authentication,
	new GetMarkerByIdController().handle
)
routes.delete(
	"/v1/marker/:id",
	authentication,
	new DeleteMarkerController().handle
)
routes.put(
	"/v1/marker/:id",
	authentication,
	new UpdateMarkerController().handle
)

routes.post("/v1/user", new CreateUserController().handle)
routes.put("/v1/user/:id", authentication, new UpdateUserController().handle)

routes.post("/v1/login", new AuthenticateUserController().handle)
routes.post(
	"/v1/refresh-token",
	authentication,
	new RefreshTokenController().handle
)
