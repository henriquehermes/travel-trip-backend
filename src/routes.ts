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
	LoginUserController,
	CreateUserController,
	GetUserController,
	UpdateUserController,
	LogoutUserController,
} from "./controllers/User"
import { authentication, isAdmin } from "./middleware/authentication"
import { RefreshTokenController } from "./controllers/RefreshToken"

export const routes = Router()

routes.post("/v1/user", new CreateUserController().handle)
routes.post("/v1/login", new LoginUserController().handle)

// ***** ADMIN ROUTES *****
routes.post(
	"/v1/admin/amenity",
	authentication,
	isAdmin(),
	new CreateAmenityController().handle
)
routes.delete(
	"/v1/admin/amenity/:id",
	authentication,
	isAdmin(),
	new DeleteAmenityController().handle
)
routes.put(
	"/v1/admin/amenity/:id",
	authentication,
	isAdmin(),
	new UpdateAmenityController().handle
)

// ***** AUTHENTICATED ROUTES *****

routes.get(
	"/v1/amenities",
	authentication,
	new GetAllAmenityController().handle
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

routes.get("/v1/user", authentication, new GetUserController().handle)
routes.put("/v1/user/:id", authentication, new UpdateUserController().handle)

routes.post(
	"/v1/refresh-token",
	authentication,
	new RefreshTokenController().handle
)

routes.post("/v1/logout", new LogoutUserController().handle)
