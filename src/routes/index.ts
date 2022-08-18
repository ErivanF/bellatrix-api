import { Express } from "express";
import { userRoutes } from "./user.routes";
const appRoutes = (app:Express) =>{
    app.use("/user",userRoutes());
}
export default appRoutes;