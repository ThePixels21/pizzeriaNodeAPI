import { Router } from "express";
import { getAllPizzas, getPizza, savePizza, updatePizza, deletePizza } from "../controllers/pizza.controller";

const router = Router()

/**
 * Get all pizzas
 * @openapi
 * /pizzas/:
 *    get:
 *      tags:
 *        - pizzas
 *      summary: "Get all pizzas"
 *      description: This endpoint returns all pizzas in the collection.
 *      responses:
 *        '200':
 *          description: Returns all pizzas.
 *        '500':
 *          description: Internal server error.
 */
router.get('/pizzas/', getAllPizzas);

/**
 * Get pizza
 * @openapi
 * /pizzas/{_id}:
 *    get:
 *      tags:
 *        - pizzas
 *      summary: "Find pizza by id"
 *      description: Returns a single pizza.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of the pizza to return.
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *        '200':
 *          description: Returns a single pizza by id.
 *        '500':
 *          description: Internal server error.
 */
router.get('/pizzas/:id', getPizza);

/**
 * Post pizza
 * @openapi
 * /pizzas/:
 *    post:
 *      tags:
 *        - pizzas
 *      summary: "Add a new pizza to the collection"
 *      description: Add a new pizza to the db.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/pizza"
 *      responses:
 *        '200':
 *          description: Pizza added successful.
 *        '500':
 *          description: Internal server error.
 */
router.post('/pizzas/', savePizza);

/**
 * Put pizza
 * @openapi
 * /pizzas/{_id}:
 *    put:
 *      tags:
 *        - pizzas
 *      summary: "Update a pizza by id"
 *      description: Update an existing pizza by id.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of the pizza to update.
 *            required: true
 *            schema:
 *              type: string
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/pizza"
 *      responses:
 *        '200':
 *          description: Pizza updated successful.
 *        '500':
 *          description: Internal server error.
 */
router.put('/pizzas/:id', updatePizza);

/**
 * Delete pizza
 * @openapi
 * /pizzas/{_id}:
 *    delete:
 *      tags:
 *        - pizzas
 *      summary: "Delete pizza by id"
 *      description: Delete an existing pizza by id.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of the pizza to delete.
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *        '200':
 *          description: Pizza deleted successful.
 *        '500':
 *          description: Internal server error.
 */
router.delete('/pizzas/:id', deletePizza);

export { router as pizzasRouter }