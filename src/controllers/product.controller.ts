import { Request, Response } from 'express';
import productService from '../services/product.service';

const register = async (req: Request, res: Response): Promise<Response> => {
  const registered = await productService.register(req.body);
  return res.status(201).json(registered);
};

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const products = await productService.getAll();
  return res.status(200).json(products);
};

export default {
  register,
  getAll,
};
