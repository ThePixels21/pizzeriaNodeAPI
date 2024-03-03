import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/mongo";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./docs/swagger";
import { pizzasRouter } from "./routes/pizza.routes";
import { cartsRouter } from "./routes/cart.routes";
import { ordersRouter } from "./routes/order.routes";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors()); //Can be consumed from any source
app.use(express.json());
app.use(pizzasRouter, cartsRouter, ordersRouter); //Endpoints
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSetup)); //Swagger endpoint

db().then(() => console.log("Connected to MongoDB")).catch(err => console.error(err)) //Db connection

app.listen(PORT, () => console.log(`Running at port ${PORT}`)); //Running port