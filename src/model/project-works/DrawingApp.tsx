import { ProjectModel } from "../projectModel";

const drawingApp = new ProjectModel({
  title: "Drawing App",
  description: "Drawing app that can draw polylines using React and GSAP.",
  tags: ["Web", "Frontend"],
  image: "project_drawing_app.png",
  techStack: [
    { fileName: "react.png", label: "react" },
    { fileName: "typescript.png", label: "typescript" },
    { fileName: "tailwind.png", label: "tailwind" },
    { fileName: "gsap.jpg", label: "gsap" },
  ],
  link: {
    prototype: "https://dev-zyrushiyao.github.io/drawing-app/",
    sourceCode: "https://github.com/dev-zyrushiyao/drawing-app",
    documentation: undefined,
  },
});

export default drawingApp;
