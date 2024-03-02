import { Request, Response, NextFunction } from "express";
import { ICart } from "../interfaces/ICart";
import { get } from "../services/pizza.service";

export default async function calculateTotalAndIngredients(req: Request, res: Response, next: NextFunction) {
    const cart: ICart = req.body;

    if(cart.pizzas && cart.pizzas.length > 0) {
        let cartTotal: number = 0;

        for(let obj of cart.pizzas){
            let pizza = await get(obj.pizza.toString());

            if(!obj.quantity || obj.quantity <= 0){
                return res.status(500).send("You can't add less than 1 pizza");
            }
            let pizzaPrice: number = pizza ? pizza.price : 0;
            let pizzaSubtotal: number = pizzaPrice * obj.quantity;

            cartTotal += pizzaSubtotal;
            obj.subtotal = pizzaSubtotal;

            if(pizza && !obj.ingredients || pizza && obj.ingredients.length == 0){
                obj.ingredients = pizza.ingredients;
            }
        }

        cart.total = cartTotal;
    } else if(cart.pizzas && cart.pizzas.length == 0){
        cart.total = 0;
    }

    next();
}