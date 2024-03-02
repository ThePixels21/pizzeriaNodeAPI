import { Schema, model} from "mongoose";
import { ICart} from "../interfaces/ICart";

const CartSchema = new Schema<ICart>(
    {
        owner: {type: String, required: true},
        total: {type: Number, required: true},
        pizzas: [
            {
                pizza: {type: Schema.Types.ObjectId, ref: "pizzas", required: true},
                quantity: {type: Number, required: true, min: [1, "You can't add less than 1 pizza"]},
                subtotal: {type: Number, required: true},
                ingredients: {
                    type: [String],
                    required: true,
                    validate: [arrayLimit, "You can't have more than 4 ingredients"]
                  }
            }
        ],
        date: {type: Date, default: Date.now}
    }, 
    {
    timestamps: true,
    versionKey: false
    }
);

function arrayLimit(ingredients: String[]) {
    return ingredients.length <= 4;
}

const CartModel = model('carts', CartSchema);
export default CartModel;