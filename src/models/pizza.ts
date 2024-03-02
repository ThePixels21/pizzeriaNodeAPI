import { Schema, model} from "mongoose";
import { IPizza } from "../interfaces/IPizza";

const PizzaSchema = new Schema<IPizza>(
    {
        name: {type: String, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true},
        ingredients: {
            type: [String],
            required: true,
            validate: [arrayLimit, "You can't have more than 4 ingredients"]
          },
        description: {type: String, default: function() {
            return `This pizza has ${this.ingredients.join(", ")}`;
        }}
    }, 
    {
    timestamps: true,
    versionKey: false
    }
);

function arrayLimit(ingredients: String[]) {
    return ingredients.length <= 4;
}

const PizzaModel = model('pizzas', PizzaSchema);
export default PizzaModel;