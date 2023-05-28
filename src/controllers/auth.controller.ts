import { Request, Response } from 'express';
import authService from '../services/auth.service';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  const auth = await authService.login(username, password);
  if (auth.status === 200) {
    return res.status(auth.status).json({ token: auth.message });
  }
  return res.status(auth.status).json({ message: auth.message });
};

export default {
  login,
};
