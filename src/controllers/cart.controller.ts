import { Request, Response, NextFunction } from "express"
import { handleHttp } from "../utils/error.handle" 
import { getAll, get, save, update, remove, removePizzaFromCart} from "../services/cart.service";
import { ICart } from "../interfaces/ICart";
import CartModel from "../models/cart";

const getCart = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const responseItem = await get(id);
        res.send(responseItem);
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEM');
    }
};

const getAllCarts = async (req: Request, res: Response) => {
    try {
        const responseItems = await getAll();
        res.send(responseItems);
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
};

const saveCart = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const responseItem = await save(body);
        res.send(responseItem);
    } catch (e){
        handleHttp(res, 'ERROR_SAVE_ITEM', e);
    }
};

const updateCart = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await update(id, body);
        res.send(response);
    } catch (e){
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
};

const deleteCart = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await remove(id);
        res.send(response);
    } catch (e){
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
};

const insertPizzaToCart = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params
    const pizza = req.body

    if(pizza.quantity && pizza.quantity > 0){
        const cart: ICart | null = await CartModel.findById(id);
      
        if (cart && cart.pizzas) {
    
            cart.pizzas.push(pizza);
    
            req.body = cart;
            next();
    
        } else {
            return res.status(500).send("Cart not found or invalid");
        }
    } else {
        return res.status(500).send("You can't add less than 1 pizza");
    }

};

const deletePizzaFromCart = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params
    const { pizzaId } = req.params

    const updatedCart = await removePizzaFromCart(id, pizzaId);
      
    if (updatedCart) {
            
        req.body = updatedCart;
        next();
    
    } else {
        return res.status(500).send("Cart not found or invalid");
    }

};

export { getCart, getAllCarts, saveCart, updateCart, deleteCart, insertPizzaToCart, deletePizzaFromCart };