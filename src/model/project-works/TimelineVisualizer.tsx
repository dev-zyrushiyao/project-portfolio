import { ProjectModel } from "../projectModel";

const timelineVisualizer = new ProjectModel({
  title: "Timeline Visualizer",
  description:
    "A interactive timeline visualizer created using GSAP timeline, Dragable , MotionPlugin and Figma.",
  tags: ["Web", "Frontend"],
  image: "project_timeline_visualizer.png",
  techStack: [
    { fileName: "react.png", label: "react" },
    { fileName: "typescript.png", label: "typescript" },
    { fileName: "tailwind.png", label: "tailwin" },
    { fileName: "gsap.jpg", label: "gsap" },
  ],
  link: {
    prototype: "https://github.com/dev-zyrushiyao/timeline-visualizer",
    sourceCode: "https://dev-zyrushiyao.github.io/timeline-visualizer/",
    documentation: undefined,
  },
});

export default timelineVisualizer;
