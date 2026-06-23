// Data types
export type Project = {
  title: string;
  stacks: readonly string[];
  image: string;
  slug: string;
}

export type UptooContentType = {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    image: string;
  }
  context: {
    picture1: string;
    picture2: string;
    picture3: string;
    stack: string[];
    date: string;
    title: string;
    description: string;
  };
  migrations: {
    title: string;
    subtitle: string;
    descriptions: {
      title: {
        from : string;
        to : string;
        subtitle: string;
      };
      content: {
        problem : string;
        solution : string;
        role: string;
        detail?: string;
      };
    }[]
  };
  ai: {
    title: string;
    subtitle: string;
    descriptions: {
      title: string;
      content: string;
      detail?: string;
    }[]
  };
  team: {
    title: string;
    subtitle?: string;
    descriptions: {
      title: string;
      subtitle: string;
      content: string;
      cards?: { label: string; content: string }[];
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

export type ProjectContent = {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    image: string;
  };
  context: {
    picture1: string;
    picture2: string;
    picture3: string;
    stack: string[];
    date: string;
    title: string;
    description: string;
  };
  contributions: {
    title: string;
    subtitle?: string;
    descriptions: {
      title?: string;
      content: string;
    }[];
  }[];
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