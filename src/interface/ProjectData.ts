export interface ProjectData {
  title: string;
  description: string;
  tags: (
    | "Web"
    | "Mobile"
    | "UI/UX Design"
    | "Design"
    | "Frontend"
    | "Backend"
  )[];
  image?: string | null,
  techStack: { directory: string; label: string }[];
  link: {
    prototype: string;
    sourceCode: string;
    documentation?: string | null;
  };
}
