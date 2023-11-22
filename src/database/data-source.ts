import "dotenv/config"
import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUser1700575212608 } from "./migrations/1700575212608-CreateUser"
import { CreateAmenity1700554817235 } from "./migrations/1700554817235-CreateAmenity"
import { CreateMarker1700575226752 } from "./migrations/1700575226752-CreateMarker"

const PORT = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST || "localhost",
	port: PORT,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	synchronize: true, // DEV_ONLY
	logging: true,
	entities: [],
	migrations: [
		CreateUser1700575212608,
		CreateAmenity1700554817235,
		CreateMarker1700575226752,
	],
})
