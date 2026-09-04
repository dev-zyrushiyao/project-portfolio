import { ProjectModel } from "../projectModel";

const projectPortfolio = new ProjectModel({
  title: "Project Portfolio",
  description: "My portfolio using react",
  tags: ["Web", "Frontend"],
  image: "project_portfolio.png",
  techStack: [
    { fileName: "react.png", label: "react" },
    { fileName: "typescript.png", label: "typescript" },
    { fileName: "tailwind.png", label: "tailwind" },
  ],
  link: {
    prototype: "https://dev-zyrushiyao.github.io/project-portfolio/",
    sourceCode: "https://github.com/dev-zyrushiyao/project-portfolio",
    documentation: undefined,
  },
});

export default projectPortfolio;
