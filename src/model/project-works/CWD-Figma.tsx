import { ProjectModel } from "../projectModel";

const cwdFigma = new ProjectModel({
  title: "CWD Web Application Figma Prototype",
  description: "A reimagine modernize website of Calamba Water District",
  tags: ["Mobile", "Web", "Frontend", "UI/UX Design"],
  image: "project_cwd_web.png",
  techStack: [
    { fileName: "figma.png", label: "figma" },
    { fileName: "material-design.png", label: "material design 3" },
  ],
  link: {
    prototype:
      "https://www.figma.com/proto/Nru7QVeWQy4c7FLex1a24d/Design-Project?node-id=1760-11157&p=f&viewport=-2389%2C-10259%2C0.16&t=H4KzBzwF0JfOQMM9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1760%3A11157&show-proto-sidebar=1&page-id=124%3A136",
    sourceCode: undefined,
    documentation:
      "https://www.behance.net/gallery/246885791/UIUX-Case-Study-CWD-Web-Mobile-Design-Concept",
  },
});

export default cwdFigma;
