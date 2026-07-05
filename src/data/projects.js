import portfolio from "../assets/images/portfolio.png";
import weather from "../assets/images/weather.png";
import todo from "../assets/images/todo.png";

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website built with React and CSS.",
    image: portfolio,
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.vercel.app"
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Weather forecast application using OpenWeather API.",
    image: weather,
    technologies: ["React", "API", "CSS"],
    github: "https://github.com/yourusername/weather-app",
    demo: "https://weather-demo.vercel.app"
  },
  {
    id: 3,
    title: "Todo App",
    description:
      "A simple task management app with CRUD operations.",
    image: todo,
    technologies: ["React", "LocalStorage"],
    github: "https://github.com/yourusername/todo-app",
    demo: "https://todo-demo.vercel.app"
  }
];