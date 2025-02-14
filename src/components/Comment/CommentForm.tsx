
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Comment } from '../../models/Comment';
import * as commentService from '../../services/commentService';
import { useAuth } from '../../context/AuthContext';
import { v4 as uuidv4 } from 'uuid';

interface CommentFormProps {
  publicationId: string;
  onCommentCreated: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ publicationId, onCommentCreated }) => {
  const [content, setContent] = useState('');
  const { user } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      console.error("Usuario no autenticado.");
      return;
    }

    const newComment: Comment = {
      id: uuidv4(),
      publicationId: publicationId, 
      authorId: user.id,
      content: content,
      createdAt: new Date(),
    };

    commentService.createComment(newComment);
    setContent('');
    onCommentCreated();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mt={2}>
      <TextField
        label="Comentario"
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
        Agregar Comentario
      </Button>
    </Box>
  );
};

export default CommentForm;