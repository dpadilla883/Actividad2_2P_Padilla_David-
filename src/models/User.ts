export interface User {
    id: string;
    username: string;
    password?: string; 
    role: 'publisher' | 'admin';
    name: string;
    email: string;
  }