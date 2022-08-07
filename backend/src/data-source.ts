import "reflect-metadata"
import { DataSource } from "typeorm"

import { Product } from "./entity/Product"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST||  "localhost",
    port: Number(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USER || "postgres",
    password: process.env.DATABASE_PASSWORD || "postgres",
    database: process.env.DATABASE_NAME || "ecommerce",
    synchronize: true,
    logging: false,
    entities: [Product],
    migrations: [],
    subscribers: [],
})
