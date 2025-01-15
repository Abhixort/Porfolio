import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with features like product search, user authentication, and secure payment integration.',
      technologies: 'React.js, Node.js, MongoDB',
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills with a modern responsive design.',
      technologies: 'HTML, CSS, JavaScript, Tailwind CSS',
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A task management tool with real-time collaboration and drag-and-drop functionality.',
      technologies: 'React.js, Firebase, Material UI',
      link: '#',
    },
    {
      title: 'Blogging Platform',
      description: 'A blogging platform supporting markdown, user authentication, and analytics.',
      technologies: 'Python, Django, PostgreSQL',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <p className="text-gray-500 text-sm mt-2">
                <span className="font-semibold">Technologies:</span> {project.technologies}
              </p>
              <a
                href={project.link}
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
