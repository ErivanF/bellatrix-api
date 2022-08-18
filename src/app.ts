import express from "express";
import appRoutes from "./routes";
import 'dotenv/config';
const app = express();
const port = parseInt(process.env.NODE_PORT||"5000");

app.use(express.json())
appRoutes(app);
app.listen(port);
console.log (`Running on port ${port}`);
