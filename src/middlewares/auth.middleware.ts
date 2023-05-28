import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body || !req.body.username || !req.body.password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  } 
  console.log(req.body);
  next();
};

export default authMiddleware;
