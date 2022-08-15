import express from "express";
import appRoutes from "./routes";

const app = express();
const port  = 3000;

app.use(express.json())
appRoutes(app);
app.listen(port);
