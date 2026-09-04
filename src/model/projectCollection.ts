import blogPost from "./project-works/BlogPost";
import cwdAndroid from "./project-works/CWD-Android";
import cwdFigma from "./project-works/CWD-Figma";
import dojoHelpdesk from "./project-works/DojoHelpdesk";
import drawingApp from "./project-works/DrawingApp";
import gsapSketchpad from "./project-works/GsapSketchpad";
import marioClub from "./project-works/MarioClub";
import projectPortfolio from "./project-works/ProjectPortfolio";
import worldTime from "./project-works/WorldTime";
import { ProjectModel } from "./projectModel";

const projects: ProjectModel[] = [];

projects.push(cwdAndroid);
projects.push(cwdFigma);
projects.push(marioClub);
projects.push(worldTime);
projects.push(blogPost);
projects.push(projectPortfolio);
projects.push(dojoHelpdesk);
projects.push(gsapSketchpad);
projects.push(drawingApp);

export default projects.reverse();
