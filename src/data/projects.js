import portfolio from "../assets/images/portfolio.png";
import farm from "../assets/images/farm.png";

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
  }
];