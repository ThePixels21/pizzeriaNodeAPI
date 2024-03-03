import { Router } from "express";
import { getAllOrders, getOrder, saveOrder, updateOrder, deleteOrder } from "../controllers/order.controller";
import deleteCart from "../middleware/deleteCartMiddleware";
import setCartToOrder from "../middleware/setCartToOrderMiddleware";

const router = Router()

/**
 * Get all orders
 * @openapi
 * /orders/:
 *    get:
 *      tags:
 *        - orders
 *      summary: "Get all orders"
 *      description: This endpoint returns all orders in the collection.
 *      responses:
 *        '200':
 *          description: Returns all orders.
 *        '500':
 *          description: Internal server error.
 */
router.get('/orders/', getAllOrders);

/**
 * Get order
 * @openapi
 * /orders/{_id}/:
 *    get:
 *      tags:
 *        - orders
 *      summary: "Find order by id"
 *      description: Returns a single order.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of the order to return.
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *        '200':
 *          description: Returns a single order by id.
 *        '500':
 *          description: Internal server error.
 */
router.get('/orders/:id/', getOrder);

/**
 * Post order
 * @openapi
 * /orders/{cartId}/:
 *    post:
 *      tags:
 *        - orders
 *      summary: "Add a new order to the collection"
 *      description: Add a new order and delete the cart from the db.
 *      parameters:
 *          - name: cartId
 *            in: path
 *            description: ID of the cart to generate order.
 *            required: true
 *            schema:
 *              type: string
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/order"
 *      responses:
 *        '200':
 *          description: Order added successful.
 *        '500':
 *          description: Internal server error.
 */
router.post('/orders/:cartId/', setCartToOrder, deleteCart, saveOrder);


/**
 * Put order
 * @openapi
 * /orders/{_id}/:
 *    put:
 *      tags:
 *        - orders
 *      summary: "Update an order by id"
 *      description: Update an existing order by id.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of the order to update.
 *            required: true
 *            schema:
 *              type: string
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/order"
 *      responses:
 *        '200':
 *          description: Order updated successful.
 *        '500':
 *          description: Internal server error.
 */
router.put('/orders/:id/', updateOrder);

/**
 * Delete order
 * @openapi
 * /orders/{_id}/:
 *    delete:
 *      tags:
 *        - orders
 *      summary: "Delete order by id"
 *      description: Delete an existing order by id.
 *      parameters:
 *          - name: _id
 *            in: path
 *            description: ID of the order to delete.
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *        '200':
 *          description: Order deleted successful.
 *        '500':
 *          description: Internal server error.
 */
router.delete('/orders/:id/', deleteOrder)

export { router as ordersRouter };