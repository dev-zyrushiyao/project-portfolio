import { ProjectModel } from "../projectModel";

const colorClonePlayground = new ProjectModel({
  title: "Color Clone Playground",
  description:
    "React GSAP Demonstration using `cloneNode()` and gsap randomizer to trigger fill color.",
  tags: ["Web", "Frontend"],
  image: "project_color_clone_playground.png",
  techStack: [
    { fileName: "react.png", label: "react" },
    { fileName: "typescript.png", label: "typescript" },
    { fileName: "css.png", label: "css" },
    { fileName: "gsap.jpg", label: "gsap" },
  ],
  link: {
    prototype: "https://dev-zyrushiyao.github.io/color-clone-playground/",
    sourceCode: "https://github.com/dev-zyrushiyao/color-clone-playground",
    documentation: undefined,
  },
});

export default colorClonePlayground;
