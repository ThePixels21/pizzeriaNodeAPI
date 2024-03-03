import { ICart } from "./ICart";

export interface IOrder {
    _id?: string;
    cart: ICart;
    address: string;
    arrived: boolean;
    arrivalTime: Date;
    createdAt?: Date;
}