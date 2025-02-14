
import { Publication } from '../models/Publication';

const PUBLICATION_KEY = 'educonnect_publications';

export const createPublication = (publication: Publication): void => {
  const publications = getPublications();
  localStorage.setItem(PUBLICATION_KEY, JSON.stringify([...publications, publication]));
};

export const getPublications = (): Publication[] => {
  const publicationsJson = localStorage.getItem(PUBLICATION_KEY);
  if (!publicationsJson) {
    return [];
  }

  const publications = JSON.parse(publicationsJson) as Publication[];
  return publications.map(publication => ({
    ...publication,
    createdAt: new Date(publication.createdAt),
    authorName: publication.authorName 
  }));
};

export const deletePublication = (id: string): void => {
  const publications = getPublications().filter(p => p.id !== id);
  localStorage.setItem(PUBLICATION_KEY, JSON.stringify(publications));
};