import { ProjectModel } from "./projectModel";

const projects: ProjectModel[] = [
  new ProjectModel({
    title: "CWD Android Mobile Application",
    description:
      "A mobile application that handles bill payments, support tickets, and bill history. A personal project submitted to Calamba Water District",
    tags: ["Mobile", "Frontend"],
    image: "project_cwd.png",
    techStack: [
      { fileName: "flutter.png", label: "flutter" },
      { fileName: "figma.png", label: "figma" },
      { fileName: "material-design.png", label: "material design 3" },
      { fileName: "riverpod.png", label: "riverpod" },
    ],
    link: {
      prototype:
        "https://dev-zyrushiyao.github.io/Calamba-Water-District-Mobile-App/",
      sourceCode:
        "https://github.com/dev-zyrushiyao/Calamba-Water-District-Mobile-App/tree/RIVERPOD-FrontEnd-UI",
      documentation:
        "https://www.behance.net/gallery/246885791/UIUX-Case-Study-CWD-Web-Mobile-Design-Concept",
    },
  }),
  new ProjectModel({
    title: "CWD Web Application Figma Prototype",
    description: "A reimagine modernize website of Calamba Water District",
    tags: ["Mobile", "Web", "Frontend", "UI/UX Design"],
    image: "project_cwd.png",
    techStack: [
      { fileName: "figma.png", label: "figma" },
      { fileName: "material-design.png", label: "material design 3" },
    ],
    link: {
      prototype:
        "https://www.figma.com/proto/Nru7QVeWQy4c7FLex1a24d/Design-Project?node-id=1760-11157&p=f&viewport=-2389%2C-10259%2C0.16&t=H4KzBzwF0JfOQMM9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1760%3A11157&show-proto-sidebar=1&page-id=124%3A136",
      sourceCode: undefined,
      documentation:
        "https://www.behance.net/gallery/246885791/UIUX-Case-Study-CWD-Web-Mobile-Design-Concept",
    },
  }),
  new ProjectModel({
    title: "Mario Club",
    description:
      "Completed Net Ninja's HTML & CSS foundational crash course to solidify core web styling and responsive layout practices.",
    tags: ["Mobile", "Web", "Frontend"],
    image: "mario.jpg",
    techStack: [
      { fileName: "html.png", label: "html" },
      { fileName: "css.png", label: "css" },
    ],
    link: {
      prototype: "https://dev-zyrushiyao.github.io/mario-club/",
      sourceCode: "https://github.com/dev-zyrushiyao/mario-club",
      documentation: undefined,
    },
  }),
  new ProjectModel({
    title: "World Time",
    description:
      "A simple flutter project that fetch timezones , learning Async and JSON",
    tags: ["Mobile", "Frontend"],
    image: undefined,
    techStack: [
      { fileName: "dart.png", label: "dart" },
      { fileName: "flutter.png", label: "flutter" },
      { fileName: "material-design.png", label: "material design 3" },
    ],
    link: {
      sourceCode: "https://github.com/dev-zyrushiyao/World-Time",
      documentation: undefined,
    },
  }),
  new ProjectModel({
    title: "React sample web using Typescript",
    description:
      "A react exercise where I learned about useState, useEffect, custom hooks, react-router",
    tags: ["Web", "Frontend"],
    image: undefined,
    techStack: [
      { fileName: "react.png", label: "react" },
      { fileName: "typescript.png", label: "typescript" },
      { fileName: "css.png", label: "css" },
    ],
    link: {
      prototype: undefined,
      sourceCode: "https://github.com/dev-zyrushiyao/react-ts-sample-web",
      documentation: undefined,
    },
  }),
  new ProjectModel({
    title: "Project Portfolio",
    description: "My portfolio using react",
    tags: ["Web", "Frontend"],
    image: "project_portfolio.png",
    techStack: [
      { fileName: "react.png", label: "react" },
      { fileName: "typescript.png", label: "typescript" },
      { fileName: "css.png", label: "css" },
    ],
    link: {
      prototype: "https://dev-zyrushiyao.github.io/project-portfolio/",
      sourceCode: "https://github.com/dev-zyrushiyao/project-portfolio",
      documentation: undefined,
    },
  }),
];

export default projects;
