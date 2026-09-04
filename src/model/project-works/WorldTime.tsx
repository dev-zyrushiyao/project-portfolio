import { ProjectModel } from "../projectModel";

const worldTime = new ProjectModel({
  title: "World Time",
  description:
    "A simple flutter project that fetch timezones , learning Async and JSON",
  tags: ["Mobile", "Frontend"],
  image: undefined,
  techStack: [
    { fileName: "dart.png", label: "dart" },
    { fileName: "flutter.png", label: "flutter" },
    { fileName: "material-design.png", label: "material design 3" },
  ],
  link: {
    sourceCode: "https://github.com/dev-zyrushiyao/World-Time",
    documentation: undefined,
  },
});

export default worldTime;
