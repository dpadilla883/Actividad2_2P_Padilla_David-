import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Publication } from '../../models/Publication';
import * as publicationService from '../../services/publicationService';
import { useAuth } from '../../context/AuthContext';
import { v4 as uuidv4 } from 'uuid';

interface PublicationFormProps {
    onPublicationCreated: () => void;
}

const PublicationForm: React.FC<PublicationFormProps> = ({ onPublicationCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      console.error("Usuario no autenticado.");
      return;
    }

    const newPublication: Publication = {
      id: uuidv4(),
      title,
      content,
      authorId: user.id,
      authorName: user.name,
      createdAt: new Date(),
    };

    publicationService.createPublication(newPublication);
    setTitle('');
    setContent('');
    onPublicationCreated();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mt={2}>
      <TextField
        label="Título"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Contenido"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Crear Publicación
      </Button>
    </Box>
  );
};

export default PublicationForm;