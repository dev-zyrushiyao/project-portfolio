import projectCollection from "../model/projectCollection";
import projectPlaceholder from "../assets/projects-img/project_placeholder.png";
import type { ProjectModel } from "@/model/projectModel";

const projects: ProjectModel[] = projectCollection;

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
              <div className="image-container w-full h-50">
                <img
                  className="w-full h-full object-fill "
                  src={getImage(false, project.image) ?? projectPlaceholder}
                  alt="Image of project"
                  title={project.title}
                />
              </div>

              {/* Project Information */}
              <div className="project-content h-full">
                <div className="project-info p-2 flex flex-col flex-1 gap-4 h-max">
                  <h3 className="text-3xl text-left typography-primary">
                    {project.title}
                  </h3>
                  <p className="text-xl text-left">{project.description}</p>

                  <p className="text-left text-sm typography-secondary">
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
                  <div className="project-link flex gap-4 p-1 justify-center typography-secondary">
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

                <div className="project-tag-division p-2 flex flex-wrap justify-start gap-3 typography-secondary">
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
