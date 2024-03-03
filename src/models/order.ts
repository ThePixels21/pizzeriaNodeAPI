import { Schema, model } from "mongoose";
import { IOrder } from "../interfaces/IOrder";
import { CartSchema } from "./cart";

const orderSchema = new Schema<IOrder> (
    {
        cart: {type: CartSchema, ref: "carts", required: true},
        address: {type: String, required: true},
        arrived: {type: Boolean, default: false},
        arrivalTime: {type: Date}
    }, 
    {
    timestamps: true,
    versionKey: false
    }
);

const OrderModel = model('orders', orderSchema);
export default OrderModel;