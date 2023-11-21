import { Sequelize } from "sequelize"

import dbConfig from "../configs/database"

import User from "../models/User"

const connection = new Sequelize(dbConfig)

User.init(connection)

User.associate(connection.models)

module.exports = connection
