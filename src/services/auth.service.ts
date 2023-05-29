import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';

type Response = {
  status: number;
  message: string;
};

const generateToken = (name: string): string =>
  jwt.sign({ name }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

const login = async (name: string, password: string): Promise<Response> => {
  const user = await UserModel.findOne({ where: { username: name } });
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return {
      status: 401,
      message: 'Username or password invalid',
    };
  }
  return {
    status: 200,
    message: generateToken(name),
  };
};

export default {
  login,
};