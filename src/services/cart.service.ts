import { ICart } from "../interfaces/ICart";
import CartModel from "../models/cart";

const getAll = async () => {
    const responseItem = await CartModel.find({});
    return responseItem;
};

const get = async (id: string) => {
    const responseItem = await CartModel.findOne({_id: id});
    return responseItem;
};

const save = async (cart : ICart) => {
    const responseInsert = await CartModel.create(cart);
    return responseInsert;
};

const update = async (id: string, data: ICart) => {
    const responseItem = await CartModel.findOneAndUpdate({_id : id}, data, {new: true});
    return responseItem;
};

const remove = async (id: string) => {
    const response = await CartModel.deleteOne({_id: id});
    return response;
};

export { getAll, get, save, update, remove }