import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        Bienvenido a EduConnect!
      </Typography>
      <Typography variant="body1" align="center">
        Una plataforma para conectar estudiantes y docentes, compartir conocimientos y colaborar.
      </Typography>
    </Container>
  );
};

export default Home;