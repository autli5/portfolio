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
    name: "Project Name 1",
    tag: "Tag 1",
    image: card1,
    link: "#"
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
