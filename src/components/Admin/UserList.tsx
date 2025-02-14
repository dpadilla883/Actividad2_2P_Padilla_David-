import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { User } from '../../models/User';
import * as userService from '../../services/userService';
import * as authService from '../../services/authService';
import { useAuth } from '../../context/AuthContext';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { user: loggedInUser } = useAuth();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    const usersData = authService.getUsers();
    
    setUsers(usersData.filter(user => user.id !== loggedInUser?.id));
  };

  const handleDelete = (id: string) => {
    userService.deleteUser(id);
    loadUsers();
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <List>
        {users.map((user) => (
          <ListItem divider key={user.id}>
            <ListItemText primary={user.name} secondary={user.username} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(user.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserList;