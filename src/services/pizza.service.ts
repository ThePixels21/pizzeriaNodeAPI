import { IPizza } from "../interfaces/IPizza";
import PizzaModel from "../models/pizza";

const getAll = async () => {
    const responseItem = await PizzaModel.find({});
    return responseItem;
};

const get = async (id: string) => {
    const responseItem = await PizzaModel.findOne({_id: id});
    return responseItem;
};

const save = async (pizza : IPizza) => {
    const responseInsert = await PizzaModel.create(pizza);
    return responseInsert;
};

const update = async (id: string, data: IPizza) => {
    const responseItem = await PizzaModel.findOneAndUpdate({_id : id}, data, {new: true});
    return responseItem;
};

const remove = async (id: string) => {
    const response = await PizzaModel.deleteOne({_id: id});
    return response;
};

export { getAll, get, save, update, remove }