import { FaGithub } from "react-icons/fa6";
import capstonepic from "../assets/groupMaternity1_pic.jpg"
import weatherpic from "../assets/nyc_background3.jpg" 
import portfoliopic from "../assets/portfoliopic.png"

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'Weather App',
    imgSrc: weatherpic,
    description: 'A fully functioning weather app.',
    repositoryLink: 'Link to the GitHub repository',
  },
  {
    title: 'Capstone Project',
    description: 'A completely responsive e-commerce site geared towards new and expecting mothers.',
    repositoryLink: 'https://github.com/Path2Tech/Path2Tech-Capstone-Project.git',
    imgSrc: capstonepic 
  },
  {
    title: 'Portfolio',
    imgSrc: portfoliopic,
    description: 'A compilation of professional documentation and work samples demonstrating my skills and accomplishments.',
    repositoryLink: 'https://github.com/sbankole312/Portfolio3.git',
  },
  {
    title: 'Project 4',
    imgSrc: "",
    description: 'TBA',
    repositoryLink: 'Link to the GitHub repository',
  },
  {
    title: 'Project 5',
    imgSrc: "",
    description: 'TBA',
    repositoryLink: 'Link to the GitHub repository',
  },
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
            {/* <FaGithub /> */}
            {project.imgSrc && < img src= {project.imgSrc} alt= "project image" />}
          </section>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>

        </section>
      ))}
    </main>
  )
}

export default Projects