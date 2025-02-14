import { User } from '../models/User';

const USER_KEY = 'educonnect_users';
const LOGGED_IN_USER_KEY = 'educonnect_logged_in_user';

export const registerUser = (user: User): void => {
  const users = getUsers();
  localStorage.setItem(USER_KEY, JSON.stringify([...users, user]));
};

export const loginUser = (username: string, passwordAttempt: string): User | null => {
  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === passwordAttempt) || null;

  if (user) {
    localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(user));
    return user;
  }

  return null;
};

export const logoutUser = (): void => {
  localStorage.removeItem(LOGGED_IN_USER_KEY);
};

export const getLoggedInUser = (): User | null => {
  const userJson = localStorage.getItem(LOGGED_IN_USER_KEY);
  return userJson ? JSON.parse(userJson) : null;
};

export const getUsers = (): User[] => {
  const usersJson = localStorage.getItem(USER_KEY);
  return usersJson ? JSON.parse(usersJson) : [];
};

// Inicialización de usuarios por defecto :
const initializeDefaultUsers = () => {
    if (getUsers().length === 0) {
      const defaultAdmin: User = {
        id: 'admin1',
        username: 'admin',
        password: 'password', 
        role: 'admin',
        name: 'Administrator',
        email: 'admin@educonnect.com'
      };
      registerUser(defaultAdmin);
    }
};

initializeDefaultUsers();