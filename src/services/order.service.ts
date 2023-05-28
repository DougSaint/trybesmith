import { Order } from 'src/types/Order';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

const getAll = async (): Promise<Order[]> => {
  const orders = await OrderModel.findAll();

  const products = await ProductModel.findAll();

  return orders.map((order) => ({
    ...order.dataValues,
    productIds: products
      .filter((p) => p.dataValues.orderId === order.dataValues.id)
      .map((i) => i.dataValues.id),
  }));
};

export default {
  getAll,
};
