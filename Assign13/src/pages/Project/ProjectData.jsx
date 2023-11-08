import React, { useState } from "react";
import AllProjects from "./AllProjects";
const projects = [
  {
    id: 1,
    name: "My First Project",
    description: "This is my first project.",
    technologies: ["Python", "Django", "React"],
    image: "https://example.com/images/my-first-project.png",
  },
  {
    id: 2,
    name: "My Second Project",
    description: "This is my second project.",
    technologies: ["JavaScript", "Node.js", "Vue.js"],
    image: "https://example.com/images/my-second-project.png",
  },
  {
    id: 3,
    name: "My Third Project",
    description: "This is my third project.",
    technologies: ["Java", "Spring Boot", "Angular"],
    image: "https://example.com/images/my-third-project.png",
  },
  {
    id: 4,
    name: "My Fourth Project",
    description: "This is my fourth project.",
    technologies: ["C#", ".NET Core", "Blazor"],
    image: "https://example.com/images/my-fourth-project.png",
  },
  {
    id: 5,
    name: "My Fifth Project",
    description: "This is my fifth project.",
    technologies: ["Go", "Gin", "GORM"],
    image: "https://example.com/images/my-fifth-project.png",
  },
  {
    id: 6,
    name: "My Sixth Project",
    description: "This is my sixth project.",
    technologies: ["Ruby on Rails", "MySQL", "Bootstrap"],
    image: "https://example.com/images/my-sixth-project.png",
  },
  {
    id: 7,
    name: "My Seventh Project",
    description: "This is my seventh project.",
    technologies: ["Laravel", "PostgreSQL", "Tailwind CSS"],
    image: "https://example.com/images/my-seventh-project.png",
  },
  {
    id: 8,
    name: "My Eighth Project",
    description: "This is my eighth project.",
    technologies: ["Django Rest Framework", "React Native", "Expo"],
    image: "https://example.com/images/my-eighth-project.png",
  },
  {
    id: 9,
    name: "My Ninth Project",
    description: "This is my ninth project.",
    technologies: ["Next.js", "Vercel", "Prisma"],
    image: "https://example.com/images/my-ninth-project.png",
  },
  {
    id: 10,
    name: "My Tenth Project",
    description: "This is my tenth project.",
    technologies: ["SolidJS", "Recoil", "Vite"],
    image: "https://example.com/images/my-tenth-project.png",
  },
];

function ProjectData() {
  const [projectDatas, setProjectDatas] = useState(projects);
  return (
    <div className="container">
      <AllProjects projectDatas={projectDatas} />
    </div>
  );
}

export default ProjectData;
