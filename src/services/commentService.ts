import { Comment } from '../models/Comment';

const COMMENT_KEY = 'educonnect_comments';

export const createComment = (comment: Comment): void => {
  const comments = getComments();
  localStorage.setItem(COMMENT_KEY, JSON.stringify([...comments, comment]));
};

export const getComments = (): Comment[] => {
  const commentsJson = localStorage.getItem(COMMENT_KEY);
  if (!commentsJson) {
    return [];
  }

  const comments = JSON.parse(commentsJson) as Comment[];
  return comments.map(comment => ({
    ...comment,
    createdAt: new Date(comment.createdAt) 
  }));
};

export const deleteComment = (id: string): void => {
  const comments = getComments().filter(c => c.id !== id);
  localStorage.setItem(COMMENT_KEY, JSON.stringify(comments));
};