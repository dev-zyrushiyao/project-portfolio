import { ProjectModel } from "@/model/projectModel";
import projectPlaceholder from "../assets/projects-img/project_placeholder.png";

const projects: ProjectModel[] = [
  new ProjectModel({
    title: "CWD Android Mobile Application",
    description:
      "A mobile application that handles bill payments, support tickets, and bill history. A personal project submitted to Calamba Water District",
    tags: ["Mobile", "Frontend"],
    image: "project_cwd.png",
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
  }),
  new ProjectModel({
    title: "CWD Web Application Figma Prototype",
    description: "A reimagine modernize website of Calamba Water District",
    tags: ["Mobile", "Web", "Frontend", "UI/UX Design"],
    image: "project_cwd.png",
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
  }),
];

function getImage(isTechstack: boolean, imgPath?: string): string | undefined {
  let IMGDIR: string;

  if (imgPath == undefined) {
    return undefined;
  }

  if (isTechstack) {
    IMGDIR = "../assets/techstack-img/";
  } else {
    IMGDIR = "../assets/projects-img/";
  }

  return new URL(IMGDIR + imgPath, import.meta.url).href;
}

const Projects = () => {
  return (
    <div className="title-section">
      <h2 className="lg:text-6xl md:text-5xl text-4xl typography-primary">
        Project list
      </h2>
      <hr />
      <div className="project-container flex flex-wrap gap-10 justify-center">
        {projects.map((project) => {
          return (
            <div
              className="project-item h-fit outline-solid outline-black rounded-sm shrink-0"
              key={project.title}
            >
              <img
                className="w-full h-auto object-cover "
                src={getImage(false, project.image) ?? projectPlaceholder}
                alt="Image of project"
                title={project.title}
              />

              {/* Project Information */}
              <div className="project-content h-full">
                <div className="project-info p-2 flex flex-col flex-1 gap-4 max-h-max">
                  <h3 className="text-3xl text-left typography-primary">
                    {project.title}
                  </h3>
                  <p className="text-xl text-left">{project.description}</p>

                  <p className="text-left text-sm typography-primary">
                    Tech Stack:
                  </p>
                  <div className="project-techstack flex flex-wrap justify-center gap-5">
                    {project.techStack.map((stack) => {
                      return (
                        // image

                        <div className="rounded-md" key={stack.label}>
                          <img
                            className="size-12"
                            src={
                              getImage(true, stack.fileName) ??
                              projectPlaceholder
                            }
                            alt={`image of ${stack.label}`}
                            title={stack.label}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* project link */}
                  <div className="project-link flex gap-4 p-1 justify-center typography-primary">
                    {project.link.prototype && (
                      <a
                        className="p-2 flex items-center rounded-md"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.link.prototype}
                      >
                        Prototype
                      </a>
                    )}

                    {project.link.sourceCode && (
                      <a
                        className="p-2 flex items-center rounded-md"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.link.sourceCode}
                      >
                        Source Code
                      </a>
                    )}

                    {project.link.documentation && (
                      <a
                        className="p-2 flex items-center rounded-md"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.link.documentation}
                      >
                        Documentation
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-tag-division p-2 flex flex-wrap justify-start gap-3 typography-primary">
                  {project.tags.map((tag) => {
                    return (
                      <div
                        className="project-tag-type text-sm p-2 rounded-3xl"
                        key={tag}
                      >
                        {tag}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
