import { IOrder } from "../interfaces/IOrder";
import OrderModel from "../models/order";

const getAll = async () => {
    const responseItem = await OrderModel.find({});
    return responseItem;
};

const get = async (id: string) => {
    const responseItem = await OrderModel.findOne({_id: id});
    return responseItem;
};

const save = async (order : IOrder) => {
    const responseInsert = await OrderModel.create(order);
    return responseInsert;
};

const update = async (id: string, data: IOrder) => {
    const responseItem = await OrderModel.findOneAndUpdate({_id : id}, data, {new: true});
    return responseItem;
};

const remove = async (id: string) => {
    const response = await OrderModel.deleteOne({_id: id});
    return response;
};

export { getAll, get, save, update, remove }