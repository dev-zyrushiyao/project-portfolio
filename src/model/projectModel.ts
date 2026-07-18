import { type ProjectData } from "../interface/ProjectData";

export class ProjectModel implements ProjectData {
  readonly title: string;
  readonly description: string;
  readonly tags: (
    | "Web"
    | "Mobile"
    | "UI/UX Design"
    | "Design"
    | "Frontend"
    | "Backend"
  )[];
  readonly image?: string | undefined;
  readonly techStack: { fileName: string; label: string }[];
  readonly link: {
    readonly prototype?: string;
    readonly sourceCode?: string;
    readonly documentation?: string;
  };

  constructor({
    title,
    description,
    tags,
    image,
    techStack,
    link,
  }: ProjectData) {
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.image = image;
    this.techStack = techStack;
    this.link = link;
  }
}
