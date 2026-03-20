import master from "../assets/master.webp";
import plod from "../assets/z-plod.png";

export interface Order {
  id: string;
  name: string;
  logo: string;
  website: string;
}

const orders: Order[] = [
  {
    id: "1",
    name: "Style Loom",
    logo: master,
    website: "https://orentools.ru/"
  },
  {
    id: "2",
    name: "Style Loom",
    logo: plod,
    website: "https://z-plod.ru/"
  },
  
];

export default orders;