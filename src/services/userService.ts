import { User } from '../types/user';

const users: User[] = []; // Temporary in-memory storage

export const getAllUsers = async () => {
  return users;
}

export const findUserById = async (id: string) => {
  const user = users.find(u => u.id === id);
  if (!user) throw new Error('User not found');
  return user;
};

export const createUser = async (userData: User) => {
  users.push(userData);
  return userData;
};
