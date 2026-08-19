import portfolio from "../assets/images/portfolio.png";
import farm from "../assets/images/farm.png";
import lost from "../assets/images/lost.png";
import quiz from "../assets/images/quiz.png";

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website built with React and CSS.",
    image: portfolio,
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/brinda169/durga",
    demo: "https://durga-portfolio-nu.vercel.app/"
  },
  {
    id: 2,
    title: "Farmer Marketplace",
    description:
      "Helps farmers to sell their own products",
    image: farm,
    technologies: ["React", "mongoDB", "JavaScript"],
    github: "https://github.com/brinda169/farmer-market-place",
    demo: "https://farmer-market-place-opal.vercel.app/"
  },
  {
    id: 3,
    title: "Lost & Found Management System",
    description:"📍 One place. Every lost item. One chance to reunite.Building a smarter way to report, track, and recover lost belongings. 🔍🤝",
    image: lost,
    technologies: ["PHP", "HTML", "CSS","MySQL"],
    demo:"localhost/lost-found/"
  },
  {
    id: 4,
    title: "Online Quiz System",
    description:"Empowering education through interactive quizzes.",
    image:quiz,
    technologies: ["PHP", "HTML", "CSS","MySQL"],
    demo:"localhost/online_quiz_system/"
  }
];