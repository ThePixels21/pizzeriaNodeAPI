import { Request, Response, NextFunction } from "express";
import { IOrder } from "../interfaces/IOrder";
import { remove } from "../services/cart.service";

export default async function deleteCart(req: Request, res: Response, next: NextFunction) {
    const order: IOrder = req.body;

    if(order && order.cart){
        const deleted = await remove(order.cart._id!!);
    }
    
    next();
}