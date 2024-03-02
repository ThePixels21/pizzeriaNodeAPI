import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle" 
import { getAll, get, save, update, remove } from "../services/pizza.service";

const getPizza = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const responseItem = await get(id);
        res.send(responseItem);
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEM');
    }
};

const getAllPizzas = async (req: Request, res: Response) => {
    try {
        const responseItems = await getAll();
        res.send(responseItems);
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
};

const savePizza = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const responseItem = await save(body);
        res.send(responseItem);
    } catch (e){
        handleHttp(res, 'ERROR_SAVE_ITEM', e);
    }
};

const updatePizza = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await update(id, body);
        res.send(response);
    } catch (e){
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
};

const deletePizza = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await remove(id);
        res.send(response);
    } catch (e){
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
};

export { getPizza, getAllPizzas, savePizza, updatePizza, deletePizza };