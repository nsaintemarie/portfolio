// Data types
export interface Project {
  title: string;
  stacks: readonly string[];
  image: string;
  href: string;
}

export interface ProjectContent {
  context: {
    picture1: string;
    picture2: string;
    picture3: string;
    stack: string[];
    title: string;
    description1: string;
    description2: string;
  };
}

export interface Proposition {
  title: string;
  description: string;
  image: string;
}

export interface RoadmapStep {
  title: string;
  content: string;
}

export interface SocialLink {
  name: string;
  href: string;
}

// Component prop types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: readonly number[] | string;
}

export interface ViewportConfig {
  once?: boolean;
  margin?: string;
}
