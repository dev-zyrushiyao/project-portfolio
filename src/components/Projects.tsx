import { ProjectModel } from "@/model/projectModel";

const projects: ProjectModel[] = [
  new ProjectModel({
    title: "Calamba Water District",
    description:
      "A mobile application that handles bill payments, support tickets, and bill history.",
    tags: ["Mobile", "Frontend", "UI/UX Design"],
    image: "/....",
    techStack: [
      { directory: "/assets/flutter.png", label: "flutter" },
      { directory: "/assets/figma.png", label: "figma" },
    ],
    link: { prototype: "test", sourceCode: "test", documentation: "RAT" },
  }),
];

const Projects = () => {
  return (
    <div className="project-content">
      <h2 className="lg:text-6xl md:text-5xl text-4xl typography-primary">
        Project list
      </h2>
      <hr />
      <div className="project-container">
        {projects.map((project) => {
          return (
            <div className="project-item outline-solid outline-black border-<number> rounded-sm p-7 w-sm">
              <img
                src={project.image ? project.image : "../nodisplay.jpg"}
                alt="Image of project"
              />
              {project.techStack.map((stack) => {
                return (
                  // image
                  <div className="project-techstack w-sm h-6">
                    <img
                      src={stack.directory}
                      alt={`image of ${stack.label}`}
                      title={`${stack.label} logo`}
                    />
                  </div>
                );
              })}

              {/* Project Information */}
              <h3 className="text-3xl text-left">{project.title}</h3>
              <p className="text-1xl text-left">{project.description}</p>
              <div className="project-tag-division flex gap-4">
                {project.tags.map((tag) => {
                  return (
                    <div className="project-type text-sm p-3 rounded-3xl">
                      {tag}
                    </div>
                  );
                })}
              </div>

              {/* project link */}
              <div className="project-link flex gap-4">
                <div>
                  <a href={project.link.prototype}>Application Prototype</a>
                </div>
                <div>
                  <a href={project.link.sourceCode}>Source Code</a>
                </div>

                {project.link.documentation && (
                  <div>
                    <a href={project.link.documentation}>Source Code</a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
