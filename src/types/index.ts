// Data types
export type Project = {
  title: string;
  stacks: readonly string[];
  image: string;
  slug: string;
}

export type ProjectContent = {
  context: {
    picture1: string;
    picture2: string;
    picture3: string;
    stack: string[];
    title: string;
    description: string;
  };
  contribution: {
    title: string;
    link?: string;
    descriptions: {
      title: string;
      content: string;
    }[]
  };
  results: {
    title: string;
    descriptions: {
      title: string;
      content: string;
    }[];
    picture1: string;
    picture2: string;
  };
}

export type Proposition = {
  title: string;
  description: string;
  image: string;
}

export type About = {
  description1: string;
  description2: string;
}

export type RoadmapStep = {
  title: string;
  content: string;
}

export type SocialLink = {
  name: string;
  href: string;
}

// Component prop types
export type AnimationConfig = {
  duration?: number;
  delay?: number;
  ease?: readonly number[] | string;
}

export type ViewportConfig = {
  once?: boolean;
  margin?: string;
}

export type Mention = {
  title: string;
  content: string[];
}