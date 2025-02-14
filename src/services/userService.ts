
import { getUsers } from './authService';

export const deleteUser = (id: string): void => {
  const users = getUsers().filter(u => u.id !== id);
  localStorage.setItem('educonnect_users', JSON.stringify(users)); 
};

