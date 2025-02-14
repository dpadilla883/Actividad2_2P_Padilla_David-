import React from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Acerca de EduConnect
      </Typography>
      <Typography variant="body1" paragraph>
        EduConnect fue creado como un proyecto para demostrar habilidades en el desarrollo de aplicaciones web con React, TypeScript y Material UI.
      </Typography>
      <Typography variant="h6">
        Grupo de Desarrollo:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="David Padilla" secondary="Director del Proyecto"  />
        </ListItem>
      </List>
    </Container>
  );
};

export default About;