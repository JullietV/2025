export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  coverImage: string;
  purpose: string;
  role: string[];
  images: string[];
  githubUrl: string;
  liveUrl: string;
  details: {
    challenge: string;
    solution: string;
    features: string[];
  };
  createdAt: string;
} 