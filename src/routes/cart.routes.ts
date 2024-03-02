import { Router } from "express";
import { getAllCarts, getCart, saveCart, updateCart, deleteCart, insertPizzaToCart } from "../controllers/cart.controller";
import  cartMiddleware  from "../middleware/cartMiddleware"

const router = Router()

/**
 * Get all carts
 * @openapi
 * /carts/:
 *    get:
 *      tags:
 *        - carts
 *      summary: "Get all carts"
 *      description: This endpoint returns all carts in the collection.
 *      responses:
 *        '200':
 *          description: Returns all carts.
 *        '500':
 *          description: Internal server error.
 */
router.get('/carts/', getAllCarts);

/**
 * Get cart
 * @openapi
 * /carts/{_id}:
 *    get:
 *      tags:
 *        - carts
 *      summary: "Find cart by id"
 *      description: Returns a single cart.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of the cart to return.
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *        '200':
 *          description: Returns a single cart by id.
 *        '500':
 *          description: Internal server error.
 */
router.get('/carts/:id', getCart);

/**
 * Post cart
 * @openapi
 * /carts/:
 *    post:
 *      tags:
 *        - carts
 *      summary: "Add a new cart to the collection"
 *      description: Add a new cart to the db.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/cart"
 *      responses:
 *        '200':
 *          description: cart added successful.
 *        '500':
 *          description: Internal server error.
 */
router.post('/carts/', cartMiddleware, saveCart);

/**
 * Put cart
 * @openapi
 * /carts/{_id}:
 *    put:
 *      tags:
 *        - carts
 *      summary: "Update a cart by id"
 *      description: Update an existing cart by id.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of the cart to update.
 *            required: true
 *            schema:
 *              type: string
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/cart"
 *      responses:
 *        '200':
 *          description: cart updated successful.
 *        '500':
 *          description: Internal server error.
 */
router.put('/carts/:id', cartMiddleware, updateCart);

/**
 * Delete cart
 * @openapi
 * /carts/{_id}:
 *    delete:
 *      tags:
 *        - carts
 *      summary: "Delete cart by id"
 *      description: Delete an existing cart by id.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of the cart to delete.
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *        '200':
 *          description: cart deleted successful.
 *        '500':
 *          description: Internal server error.
 */
router.delete('/carts/:id', deleteCart);

/**
 * Add pizza to cart
 * @openapi
 * /carts/{_id}/pizzas:
 *    patch:
 *      tags:
 *        - carts
 *      summary: "Add a new pizza to a cart"
 *      description: Update an existing cart adding a new pizza.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of the cart to update.
 *            required: true
 *            schema:
 *              type: string
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/cartPizza"
 *      responses:
 *        '200':
 *          description: cart updated successful.
 *        '500':
 *          description: Internal server error.
 */
router.patch('/carts/:id/pizzas', insertPizzaToCart, cartMiddleware, updateCart);

export { router as cartsRouter }