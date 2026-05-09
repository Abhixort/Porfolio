export interface Skill {
  name: string;
  category: "language" | "frontend" | "backend" | "platform" | "database" | "devops";
}

export interface Stat {
  label: string;
  value: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  technologies: string[];
  impact: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  impact: string;
  highlights: string[];
  stack: string[];
  github: string;
  githubBackend?: string;
  live?: string;
  featured: boolean;
  image?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details: string[];
}

export interface Certification {
  title: string;
  focus: string;
}

export interface PortfolioData {
  meta: {
    name: string;
    role: string;
    currentRole: string;
    currentCompany: string;
    tagline: string;
    email: string;
    phone: string;
    location: string;
    availability: string;
    responseTime: string;
    github: string;
    linkedin: string;
    leetcode: string;
    resumeUrl: string;
    siteUrl: string;
    ogImage: string;
  };
  summary: string;
  stats: Stat[];
  focusAreas: FocusArea[];
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}
