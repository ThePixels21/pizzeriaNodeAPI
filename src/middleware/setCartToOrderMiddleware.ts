import { Request, Response, NextFunction } from "express";
import { IOrder } from "../interfaces/IOrder";
import { get } from "../services/cart.service";
import { ICart } from "../interfaces/ICart";

export default async function setCartToOrder(req: Request, res: Response, next: NextFunction) {
    const { cartId } = req.params;
    const order: IOrder = req.body;

    if(order){
        const cart: ICart | null = await get(cartId);
        if(cart){
            order.cart = cart;
            next();
        } else {
            return res.status(404).send("Cart not found")
        }
    }
    
}