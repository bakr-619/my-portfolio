import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with payment integration',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/project1.jpg',
    githubLink: 'https://github.com/thony32/project1',
    liveLink: 'https://project1.vercel.app'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Real-time social media analytics and management tool',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/project2.jpg',
    githubLink: 'https://github.com/thony32/project2',
    liveLink: 'https://project2.vercel.app'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task tracking and productivity tool',
    technologies: ['React', 'Firebase', 'Chakra UI'],
    imageUrl: '/project3.jpg',
    githubLink: 'https://github.com/thony32/project3',
    liveLink: 'https://project3.vercel.app'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  layout="fill" 
                  objectCover="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;