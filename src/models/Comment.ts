export interface Comment {
    id: string;
    publicationId: string; 
    authorId: string; 
    content: string;
    createdAt: Date;
  }