interface Project {
  name: string;
  description: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    name: 'pelen.io',
    description: 'pelen is an AI-powered platform that connects buyers and manufacturers, automating RFQs, pricing, and procurement in one streamlined workflow.',
    github: 'https://github.com/whoffman1989/pelen.io',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-8 sm:mb-12">
          Projects
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-neutral-800 rounded-lg p-5 sm:p-6 hover:border-neutral-700 transition-colors duration-200"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-2 sm:mb-3">
                {project.name}
              </h3>
              <p className="text-neutral-400 mb-4 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-neutral-100 active:text-white transition-colors duration-200 text-sm font-medium touch-manipulation"
                  >
                    View Demo →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-neutral-100 active:text-white transition-colors duration-200 text-sm font-medium touch-manipulation"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
