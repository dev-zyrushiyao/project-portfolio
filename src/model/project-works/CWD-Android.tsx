import { ProjectModel } from "../projectModel";

const cwdAndroid = new ProjectModel({
  title: "CWD Android Mobile Application",
  description:
    "A mobile application that handles bill payments, support tickets, and bill history. A personal project submitted to Calamba Water District",
  tags: ["Mobile", "Frontend"],
  image: "project_cwd_app.png",
  techStack: [
    { fileName: "flutter.png", label: "flutter" },
    { fileName: "figma.png", label: "figma" },
    { fileName: "material-design.png", label: "material design 3" },
    { fileName: "riverpod.png", label: "riverpod" },
  ],
  link: {
    prototype:
      "https://dev-zyrushiyao.github.io/Calamba-Water-District-Mobile-App/",
    sourceCode:
      "https://github.com/dev-zyrushiyao/Calamba-Water-District-Mobile-App/tree/RIVERPOD-FrontEnd-UI",
    documentation:
      "https://www.behance.net/gallery/246885791/UIUX-Case-Study-CWD-Web-Mobile-Design-Concept",
  },
});

export default cwdAndroid;
