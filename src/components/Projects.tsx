import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black py-12 px-4 pl-20 pr-20 rounded-tl-3xl rounded-tr-3xl relative z-0"
    >
      <div className="max-w-6xl mx-auto">
        {/* Recent Work 標題區塊 */}
        <div className="text-center my-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Recent Work
          </h2>
          <p className="text-white text-lg mt-2">
            A collection of projects I've worked on.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Go to GitHub 按鈕 */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/minghsuan0317"
            target="_blank"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition"
          >
            See more on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
