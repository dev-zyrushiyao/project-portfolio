import { ProjectModel } from "../projectModel";

const blogPost = new ProjectModel({
  title: "BlogPost",
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
});

export default blogPost;
