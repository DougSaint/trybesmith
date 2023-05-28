import express from 'express';
import productController from './controllers/product.controller';
import orderController from './controllers/order.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.register);
app.get('/products', productController.getAll);
app.get('/orders', orderController.getAll);

export default app;
