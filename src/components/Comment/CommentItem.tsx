import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Comment } from '../../models/Comment';
import * as commentService from '../../services/commentService';
import { useAuth } from '../../context/AuthContext';

interface CommentItemProps {
    comment: Comment;
    onDelete: () => void;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, onDelete }) => {
    const { user } = useAuth();

    const handleDelete = () => {
        commentService.deleteComment(comment.id);
        onDelete();
    };

    return (
        <ListItem divider alignItems="flex-start">
            <ListItemText
                primary={
                    <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Autor ID: {comment.authorId}
                        </Typography>
                        {` - Publicado el: ${comment.createdAt.toLocaleDateString()}`}
                    </>
                }
                secondary={comment.content}
            />
            {(user?.role === 'admin' || user?.id === comment.authorId) && (
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            )}
        </ListItem>
    );
};

export default CommentItem;