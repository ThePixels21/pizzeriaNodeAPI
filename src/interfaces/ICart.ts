import { IPizza } from "./IPizza";

export interface ICart {
    _id?: string;
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