import styleLoom from "../assets/style-loom.png";
import klothink from "../assets/klothink.png";

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
    image: styleLoom,
    link: "https://autli5.github.io/style-loom/"
  },
  {
    id: "2",
    name: "Ecommerce klothink",
    tag: "Klothink",
    image: klothink,
    link: "https://autli5.github.io/klothink/"
  }
];

export default projects;
