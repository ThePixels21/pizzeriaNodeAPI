import { IPizza } from "./IPizza";

export interface ICart {
    owner: string;
    total: number;
    pizzas: {
        pizza: IPizza;
        quantity: number;
        subtotal: number;
        ingredients: string[];
    }[];
    date: Date;
}