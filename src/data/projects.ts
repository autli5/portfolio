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
    name: "Ecommerce Style Loom",
    tag: "Style Loom",
    image: card1,
    link: "https://autli5.github.io/style-loom/"
  }
];

export default projects;
