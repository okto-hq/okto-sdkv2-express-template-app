import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService';

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.findUserById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.getAllUsers();
    res.json(user);
  } catch (error) {
    next(error);
  }
}
