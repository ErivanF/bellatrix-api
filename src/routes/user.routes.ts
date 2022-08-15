import { Router , Response} from "express";

const routes = Router();

export const userRoutes = ()=>{
    routes.get("/hello",(req, res: Response)=>{
        console.log("Teste");
        return res.json({res:"Hello"});
    })
    return routes;
}