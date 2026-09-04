import { ProjectModel } from "../projectModel";

const dojoHelpdesk = new ProjectModel({
  title: "Dojo Helpdesk",
  description:
    "From Net Ninja Tutorial: Dojo HelpDesk is a simple web project that adds ticket , designing using Tailwind css 4, fetchs data from dummy JSON using NextJS ",
  tags: ["Web", "Frontend"],
  image: "project_dojo_helpdesk.png",
  techStack: [
    { fileName: "react.png", label: "react" },
    { fileName: "typescript.png", label: "typescript" },
    { fileName: "nextjs.png", label: "nextjs" },
    { fileName: "tailwind.png", label: "tailwind" },
  ],
  link: {
    prototype: undefined,
    sourceCode: "https://github.com/dev-zyrushiyao/next-tutorial",
    documentation: undefined,
  },
});

export default dojoHelpdesk;
