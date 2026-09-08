import { ProjectModel } from "../projectModel";

const easeVisualizer = new ProjectModel({
  title: "Ease Visualizer",
  description:
    "Ease Visualizer using GSAP's MorpSVG , CustomEase , MotionPathPlugin and DrawSVG.",
  tags: ["Web", "Frontend"],
  image: "project_ease_visualizer.png",
  techStack: [
    { fileName: "react.png", label: "react" },
    { fileName: "typescript.png", label: "typescript" },
    { fileName: "tailwind.png", label: "tailwind" },
    { fileName: "gsap.jpg", label: "gsap" },
  ],
  link: {
    prototype: "https://dev-zyrushiyao.github.io/ease-visualizer/",
    sourceCode: "https://github.com/dev-zyrushiyao/ease-visualizer",
    documentation: undefined,
  },
});

export default easeVisualizer;
