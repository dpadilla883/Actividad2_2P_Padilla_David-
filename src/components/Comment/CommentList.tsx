
import React, { useState, useEffect } from 'react';
import { List } from '@mui/material';
import { Comment } from '../../models/Comment';
import * as commentService from '../../services/commentService';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem'; 


interface CommentListProps {
  publicationId: string; 
}

const CommentList: React.FC<CommentListProps> = ({ publicationId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    loadComments();
  }, [publicationId]);

  const loadComments = () => {
    const commentsData = commentService.getComments().filter(comment => comment.publicationId === publicationId);
    setComments(commentsData);
  };

  const handleCommentCreated = () => {
    loadComments();
  };

  return (
    <div>
      {/* **El formulario de comentarios recibe el publicationId** */}
      <CommentForm publicationId={publicationId} onCommentCreated={handleCommentCreated} />
      <List>
      
        {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} onDelete={loadComments} />  
        ))}
      </List>
    </div>
  );
};

export default CommentList;