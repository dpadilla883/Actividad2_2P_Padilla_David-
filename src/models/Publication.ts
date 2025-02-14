// src/models/Publication.ts
export interface Publication {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string; 
  createdAt: Date;
}