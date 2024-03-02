import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/mongo";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./docs/swagger";
import { pizzasRouter } from "./routes/pizza.routes";
import { cartsRouter } from "./routes/cart.routes";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors()); //Puede ser consumida por cualquier origen
app.use(express.json());
app.use(pizzasRouter, cartsRouter);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

db().then(() => console.log("Connected to MongoDB")).catch(err => console.error(err)) //Conexión a la bd

app.listen(PORT, () => console.log(`Running at port ${PORT}`));