import Project from "./Project";

function Projects() {
  const projects = [
    {
      name: "Project 1",
      content: "Malmö Cycling Club",
      emoji: "🚲",
    },
    {
      name: "Project 2",
      content: "Rock Paper Scissor",
      emoji: "✂️",
    },
    {
      name: "Project 3",
      content: "Hangman",
      emoji: "🙍🏼‍♂️",
    },
    {
      name: "Project 4",
      content: "Bake me a cake",
      emoji: "🍰",
    },
    {
      name: "Project 5",
      content: "Coffee Shop",
      emoji: "☕️",
    },
  ];

  return (
    <div>
      <ul>
        {projects.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            content={project.content}
            emoji={project.emoji}
          />
        ))}
      </ul>
    </div>
  );
}
export default Projects;
