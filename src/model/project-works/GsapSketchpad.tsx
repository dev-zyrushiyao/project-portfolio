import { ProjectModel } from "../projectModel";

const gsapSketchpad = new ProjectModel({
  title: "GSAP Sketchpad",
  description:
    "This is my sketch pad animation using GSAP for creativecodingclub.com, this page has a bunch of basic animations such as tween , tweenTo , DrawSVG , toFrom tween etc.",
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
    prototype: "https://dev-zyrushiyao.github.io/gsap-animation-sample/",
    sourceCode: "https://github.com/dev-zyrushiyao/gsap-animation-sample",
    documentation: undefined,
  },
});

export default gsapSketchpad;
