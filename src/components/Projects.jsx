import React from "react";

const Projects = () => {
  const Projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern personal portfolio website built with React, TailwindCSS, and Framer Motion. It features a responsive design, smooth transitions, and sections for showcasing projects, contact information, and personal information.",
      technologies: ["React", "TailwindCSS"],
    },
    {
      title: "Chaty - Realtime Chat Web Application",
      description:
        "Developed a real-time chat web application enabling users to create accounts, log in securely, and engage in instant messaging with other users. Implemented robust authentication mechanisms and a seamless user interface for efficient communication. Integrated real-time updates using WebSockets for instant message delivery.",
      technologies: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Socket.io",
        "TailwindCSS",
      ],
    },
    {
      title: "Amazon UI Clone",
      description:
        "Created an Amazon UI Clone, replicating the homepage design with responsive layouts and dynamic product grids. Implemented responsiveness for seamless viewing across devices.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <>
      <div className="pb-10 px-28 ">
        <p className="border-t border-stone-900"></p>
      </div>
      <div className="pb-12 lg:px-72 sm:px-8">
        <h2 className="py-4 pb-14 text-center text-4xl font-bold bg-gradient-to-r from-pink-600 to-cyan-400 bg-clip-text text-transparent">
          Personal Projects
        </h2>
        <div>
          {Projects.map((project, index) => (
            <div
              key={index}
              className="mb-8 flex flex-wrap py-4 lg:justify-center"
            >
              <div className="w-full bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
                <h3 className="mb-2 font-medium text-3xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="mb-4 bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent text-base">
                  {project.description}
                </p>
                <div>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      className="mr-4 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                      key={techIndex}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
