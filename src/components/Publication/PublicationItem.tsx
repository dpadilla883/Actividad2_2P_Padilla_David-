
import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Publication } from '../../models/Publication';
import * as publicationService from '../../services/publicationService';
import { useAuth } from '../../context/AuthContext';
import CommentList from '../Comment/CommentList';

interface PublicationItemProps {
  publication: Publication;
  onDelete: () => void;
}

const PublicationItem: React.FC<PublicationItemProps> = ({ publication, onDelete }) => {
  const { user } = useAuth();

  const handleDelete = () => {
    publicationService.deletePublication(publication.id);
    onDelete();
  };

  return (
    <ListItem divider alignItems="flex-start">
      <ListItemText
        primary={publication.title}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Autor: {publication.authorName}
            </Typography>
            {` - Publicado el: ${publication.createdAt.toLocaleDateString()}`}
            <br />
            {publication.content}
          </>
        }
      />
      {(user?.role === 'admin' || user?.id === publication.authorId) && (
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      )}
      {/* **Aquí se renderiza la lista de comentarios y el formulario para cada publicación** */}
      <CommentList publicationId={publication.id} />
    </ListItem>
  );
};

export default PublicationItem;