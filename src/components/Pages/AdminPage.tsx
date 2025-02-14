import React from 'react';
import UserList from '../../components/Admin/UserList'; // Importación corregida
import { Container, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const AdminPage = () => {
  const { user } = useAuth();

  // Si no es administrador, redirige a la página de inicio
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Panel de Administración
      </Typography>
      <UserList />
    </Container>
  );
};

export default AdminPage;