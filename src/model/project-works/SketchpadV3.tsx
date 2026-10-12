import { ProjectModel } from "../projectModel";

const gsapSketchPadV3 = new ProjectModel({
  title: "GSAP Sketchpad V3",
  description:
    "My sketchpad for the ScrollTrigger Express course , this project contains stacked components; responsiveness is not fully supported. best viewed on desktop screens",
  tags: ["Web", "Frontend"],
  image: "project_gsap_sketchpad_v3.png",
  techStack: [
    { fileName: "react.png", label: "react" },
    { fileName: "typescript.png", label: "typescript" },
    { fileName: "nextjs.png", label: "nextjs" },
    { fileName: "tailwind.png", label: "tailwind" },
    { fileName: "gsap.jpg", label: "gsap" },
  ],
  link: {
    prototype: "https://dev-zyrushiyao.github.io/gsap-sketchpad-v3/",
    sourceCode: "https://github.com/dev-zyrushiyao/gsap-sketchpad-v3",
    documentation: undefined,
  },
});

export default gsapSketchPadV3;
