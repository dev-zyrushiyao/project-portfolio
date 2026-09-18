import { ProjectModel } from "../projectModel";

const gsapSketchPadV2 = new ProjectModel({
  title: "GSAP Sketchpad V2",
  description: "My sketchpad from CCC:Beyond The Basics Course",
  tags: ["Web", "Frontend"],
  image: "project_gsap_sketchpad.png",
  techStack: [
    { fileName: "react.png", label: "react" },
    { fileName: "typescript.png", label: "typescript" },
    { fileName: "nextjs.png", label: "nextjs" },
    { fileName: "tailwind.png", label: "tailwind" },
    { fileName: "gsap.jpg", label: "gsap" },
  ],
  link: {
    prototype: "https://dev-zyrushiyao.github.io/gsap-sketchpad-v2/",
    sourceCode: "https://github.com/dev-zyrushiyao/gsap-sketchpad-v2",
    documentation: undefined,
  },
});

export default gsapSketchPadV2;
