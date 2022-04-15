import projects from '../assests/data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => (
  projects.map((project) => (
    <ProjectCard
      image={project.img}
      alt={project.alt}
      title={project.title}
      content={project.content}
    />
  ))
);

export default Projects;
