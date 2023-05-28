import express from 'express';
import productController from './controllers/product.controller';
import orderController from './controllers/order.controller';

import authMiddleware from './middlewares/auth.middleware';
import authController from './controllers/auth.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.register);
app.get('/products', productController.getAll);
app.get('/orders', orderController.getAll);
app.post('/login', authMiddleware, authController.login);

export default app;
