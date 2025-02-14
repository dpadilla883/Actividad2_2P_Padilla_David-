import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { Publication } from '../../models/Publication';
import * as publicationService from '../../services/publicationService';
import { useAuth } from '../../context/AuthContext';
import PublicationForm from './PublicationForm';
import PublicationItem from './PublicationItem';

const PublicationList = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    loadPublications();
  }, []);

  const loadPublications = () => {
    const publicationsData = publicationService.getPublications();
    setPublications(publicationsData);
  };

  const handlePublicationCreated = () => {
      loadPublications();
  }

  return (
    <div>
      <h2>Publicaciones</h2>
      {user && <PublicationForm onPublicationCreated={handlePublicationCreated} />}
      <List>
        {publications.map((publication) => (
          <PublicationItem key={publication.id} publication={publication} onDelete={loadPublications} />
        ))}
      </List>
    </div>
  );
};

export default PublicationList;