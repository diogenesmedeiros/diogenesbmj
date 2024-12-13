"use client";

import {
  FaAws,
  FaDocker,
  FaGit,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSchool,
  FaServicestack,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiSpring,
  SiTypescript,
} from "react-icons/si";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <Profile
      profilePicture={"./picture.jpg"}
      name="Diógenes Júnior"
      description="Atualmente cursando Ciência da Computação, possuo uma forte 
    base em desenvolvimento Back-End. Minha jornada envolve a criação de projetos 
    que aplicam na prática meus conhecimentos em programação orientada a objetos 
    (POO), lógica de programação e desenvolvimento de APIs."
      skills={[
        {
          name: "AWS",
          icon: <FaAws />,
        },
        {
          name: "Docker",
          icon: <FaDocker />,
        },
        {
          name: "Postgres",
          icon: <SiPostgresql />,
        },
        {
          name: "Github",
          icon: <FaGithub />,
        },
        {
          name: "Git",
          icon: <FaGit />,
        },
        {
          name: "Redis",
          icon: <SiRedis />,
        },
        {
          name: "Java",
          icon: <FaJava />,
        },
        {
          name: "Microservices",
          icon: <FaServicestack />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
        },
        {
          name: "React.js",
          icon: <FaReact />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
        },
        {
          name: "Spring Boot",
          icon: <SiSpring />,
        },
        {
          name: "Python",
          icon: <FaPython />,
        },
      ]}
      education={[
        {
          name: "Faculdade Católica da Paraíba - 2024/2028",
          icon: <FaSchool />,
        },
      ]}
      cv={
        "https://docs.google.com/document/d/13LhgZWWr1YHeW9ZIu9ENollod3s4hxc-3OJfg1cjznw/edit?tab=t.0"
      }
      email={"diogenes.medeiros.j@gmail.com"}
      github={"https://github.com/diogenesmedeiros"}
      linkedin={"https://www.linkedin.com/in/diogenesmedeirosy"}
    />
  );
}
