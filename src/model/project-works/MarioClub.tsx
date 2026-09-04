import { ProjectModel } from "../projectModel";

const marioClub = new ProjectModel({
  title: "Mario Club",
  description:
    "Completed Net Ninja's HTML & CSS foundational crash course to solidify core web styling and responsive layout practices.",
  tags: ["Mobile", "Web", "Frontend"],
  image: "project_mario.jpg",
  techStack: [
    { fileName: "html.png", label: "html" },
    { fileName: "css.png", label: "css" },
  ],
  link: {
    prototype: "https://dev-zyrushiyao.github.io/mario-club/",
    sourceCode: "https://github.com/dev-zyrushiyao/mario-club",
    documentation: undefined,
  },
});

export default marioClub;
