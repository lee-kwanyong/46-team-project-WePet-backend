import dotenv from 'dotenv'
dotenv.config()

import { DataSource } from 'typeorm'

const database = new DataSource({
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
})

export { database }

