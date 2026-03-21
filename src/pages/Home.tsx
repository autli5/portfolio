// src/pages/Home.tsx
import "../styles/pages/Home.css";

import strelka from "../assets/strelka.svg";

import projects from "../data/projects";
import orders from "../data/orders";

// Assuming Project interface is defined here or imported from a types file
interface Project {
  id: string; // Changed to string based on your projects.ts example
  name: string;
  tag: string;
  image: string; // This should be the type of 'card1' which is likely a string path
  link: string;
}

interface Order {
  id: string;
  name: string;
  logo: string;
  website: string;
}


export default function Home() {

  return (
    <div className="container mainSite">
      <div className="top">
        <h1 className="titleSite">Сайт и визуальный стиль</h1>
        <div className="scrolling">
          <p>Скролить вниз <img src={strelka} alt="" /></p>
        </div>
      </div>

      <div className="description">
        <div className="left">
          <h1>Связь со мной</h1>
          <p>autli@list.ru</p>
        </div>
        <div className="right">
          <p>Я Никита, разработчик Frontend части, создаю desktop laptop and phone структуру отображения дизайна сайта</p>
        </div>
      </div>

      <div className="projects">
        <h1>Проекты</h1>
        <p>Как опытный создатель современных, удобных для пользователя веб-дизайнов и цифровых решений, я стремлюсь помочь вам в создании бренда вашей мечты.</p>

        <div className="cards">
          {projects.map((project: Project) => ( // Explicitly typing 'project' here
            <div className="card" key={project.id}>
              <img src={project.image} alt={project.name} />
              <div className="info">
                <h1>{project.name}</h1>
                <p>{project.tag}</p>
                <a href={project.link} target="_blank">Перейти</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="orders">
        <div className="container">
          <h1>Заказы</h1>
          {orders.map((order: Order) => (
            <div className="order" key={order.id}>
              <a href={order.website} target="_blank">
                <img src={order.logo} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="led">
        <div className="led-text">
          <span>Visual design for digital experiences &nbsp;&nbsp;&nbsp;</span>
          <span>Visual design for digital experiences &nbsp;&nbsp;&nbsp;</span>
          <span>Visual design for digital experiences &nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>

      <div className="contactMe">
        <h1>Свяжись со мной!</h1>
        <a href="mailto:autli@list.ru">autli@list.ru</a>
      </div>
    </div>
  );
}
