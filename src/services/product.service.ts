import { Product } from 'src/types/Product';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

const register = async (product: ProductInputtableTypes): Promise<Product> => {
  const newProduct = await ProductModel.create(product);
  return newProduct.dataValues;
};

const getAll = async (): Promise<Product[]> => {
  const products = await ProductModel.findAll();
  return products.map((product) => product.dataValues);
};

export default {
  register,
  getAll,
};