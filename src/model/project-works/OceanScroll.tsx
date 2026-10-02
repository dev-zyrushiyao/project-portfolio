import { ProjectModel } from "../projectModel";

const OceanScroll = new ProjectModel({
  title: "Ocean Scroll",
  description: "Interactive SVG using GSAP ScrollTrigger , tween and timelines",
  tags: ["Web", "Frontend"],
  image: "project_ocean_scroll.png",
  techStack: [
    { fileName: "react.png", label: "react" },
    { fileName: "typescript.png", label: "typescript" },
    { fileName: "tailwind.png", label: "tailwind" },
    { fileName: "gsap.jpg", label: "gsap" },
  ],
  link: {
    prototype: "https://dev-zyrushiyao.github.io/ocean-scroll/",
    sourceCode: "http://localhost:5173/project-portfolio/",
    documentation: undefined,
  },
});

export default OceanScroll;
