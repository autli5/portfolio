import card1 from "../assets/card1.png";

export interface Project { // Интерфейс Project теперь здесь
  id: string;
  name: string;
  tag: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "Ecommerce Website UI Template Design - Dark Theme (Community)",
    tag: "Style Loom",
    image: card1,
    link: "https://autli5.github.io/ecommerce/"
  },
  {
    id: "2",
    name: "Project Name 2",
    tag: "Tag 1",
    image: card1,
    link: "#"
  },
];

export default projects;
