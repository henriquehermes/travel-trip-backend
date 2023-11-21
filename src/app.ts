import cookieParser from "cookie-parser"
import cors from "cors"
import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import passport from "passport"
import { jwtStrategy } from "./configs/passport.js"

import errorHandler from "./middleware/errorHandler"
import fourOhFour from "./middleware/fourOhFour"
import root from "./routes/root"

const app = express()

// Apply most middleware first
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(
	cors({
		origin: "*",
	})
)

app.use(helmet())
app.use(morgan("tiny"))

// jwt authentication
passport.use("jwt", jwtStrategy)
app.use(passport.initialize())

// Apply routes before error handling
app.use("/", root)

// Apply error handling last
app.use(fourOhFour)
app.use(errorHandler)

export default app
