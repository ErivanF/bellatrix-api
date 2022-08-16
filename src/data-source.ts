import {DataSource} from "typeorm";
import { User } from "./entity/User.entity";

export const AppDataSource = new DataSource({
    type:"mongodb",
    host: process.env.MONGODB_HOST,
    port: parseInt(process.env.MONGODB_PORT||"27017"),
    database: process.env.MONGODB_DBNAME,
    username: process.env.MONGODB_USER,
    password: process.env.MONGODB_PWD,
    entities: [User],
    migrations: ["src/migrations/*.ts"],
    synchronize: false
})
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source initialized")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })