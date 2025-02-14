import React from 'react';
import PublicationList from '../../components/Publication/PublicationList'; 
import { Container } from '@mui/material';

const PublicationsPage = () => {
  return (
    <Container maxWidth="md">
      <PublicationList />
    </Container>
  );
};

export default PublicationsPage;