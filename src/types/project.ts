export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  details: {
    challenge: string;
    solution: string;
    features: string[];
  };
  createdAt: string;
} 