import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'E-Commerce Platform',
    description: 'Full-stack online store with payment integration, user authentication, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    image: '/images/ecommerce.jpg' // add your project image path
  },
  {
    name: 'Task Management App',
    description: 'Collaborative task tracker with real-time updates and team management features.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    image: '/images/taskapp.jpg'
  },
  {
    name: 'Weather Dashboard',
    description: 'Interactive weather application with geolocation and 7-day forecast visualization.',
    tech: ['React', 'API Integration', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    image: '/images/weather.jpg'
  },
  {
    name: 'Portfolio CMS',
    description: 'Content management system for portfolios with drag-and-drop interface.',
    tech: ['React', 'Express', 'MongoDB', 'Node.js'],
    github: '#',
    demo: '#',
    image: '/images/portfolio-cms.jpg'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
