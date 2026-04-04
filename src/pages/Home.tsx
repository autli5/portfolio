import { useState } from "react"

import "../styles/pages/Home.css"

import github from "../assets/svg/github.svg"
import email from "../assets/svg/email.svg"

import services from "../data/services";
import projects from "../data/projects";

import avatar from "../assets/avatar/avatar.png"

export default function Home() {
    
    const techStack = [
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
        { name: 'Vite', icon: '⚡' },
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: 'TS' },
    ];

    const [activeFilter, setActiveFilter] = useState("All");


    // const filters = ["all", "web", "mobile", "design"];
    const filters = ["All"]

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter(p => p.category === activeFilter);
    
    return (
        <main className="home">
            <div className="container">
                
                <div className="status">
                    <span className="dot"></span>
                    В разработке
                </div>
                <div className="welcome-container">
                    <div className="welcome-text">
                        <h1>
                        Hi, I'm <span className="name">Nikita</span>
                        </h1>
                        <p className="role">Web Developer & UI/UX Designer</p>
                        <p className="desc">
                        Создаю современные веб-приложения с хорошим UX и чистым кодом.
                        </p>
                        <div className="buttons">
                        <a href="#" className="btn primary">Связаться</a>
                        <a href="#" className="btn outline">Проекты</a>
                        </div>
                        <div className="links">
                        <a href="https://github.com/autli5" target="_blank"><img src={github} alt=""/></a>
                        <a href="mailto:autli@list.ru" target="_blank"><img src={email} alt=""/></a>
                        </div>
                        <div className="stack">
                        <p className="stackText">Технический стек</p>
                        <div className="list">
                            {techStack.map((tech) => (
                            <div key={tech.name} className="card">
                                <span className="iconCard">{tech.icon}</span>
                                <span className="nameCard">{tech.name}</span>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="avatar">
                    <img src={avatar} alt="" />
                </div>

                </div>
                <div className="about">
                    <h1>Обо <span className="name">мне</span></h1>
                    <div className="content">
                        <div className="text">
                            <p>Я — увлеченный веб-разработчик. Обладая более чем 5-летним опытом веб-разработки, я специализируюсь на создании современных, адаптивных и удобных для пользователей веб-сайтов. Моя экспертиза охватывает как фронтенд, так и бэкенд технологии, что позволяет мне предоставлять комплексные веб-решения. <br />
                                <br />
                                Я увлечен чистым кодом, элегантным дизайном и созданием цифровых впечатлений, которые меняют мир к лучшему. Будь то сложное веб-приложение или простая целевая страница, я привношу креативность и техническое совершенство в каждый проект. <br />
                            </p>
                        </div>

                        <div className="image">
                            <img src={github} alt="" />
                        </div>
                    </div>
                </div>

                    <div className="services">
                        <div className="services-header">
                            <p className="label">Сервисы</p>
                            <h1>
                                Что я <span className="name">предлагаю</span>
                            </h1>
                            <div className="line"></div>
                        </div>

                        <div className="services-grid">
                        {services.map((item, i) => (
                            <div className="service-card" key={i}>
                                
                                <div className="icon">
                                    <img src={item.icon} alt="" />
                                </div>

                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>

                                <div className="learn">
                                    <span>Подробнее</span> →
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

                <div className="portfolio">

                    <div className="portfolio-header">
                        <p className="label">Портфолио</p>
                        <h1>Мои <span className="name">Проекты</span></h1>
                        <div className="line"></div>
                    </div>

                    {/* ФИЛЬТРЫ */}
                    <div className="filters">
                        {filters.map((f) => (
                            <button
                                key={f}
                                className={activeFilter === f ? "active" : ""}
                                onClick={() => setActiveFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* КАРТОЧКИ */}
                    <div className="portfolio-grid">
                        {filteredProjects.map((project, i) => (
                            <div className="project-card" key={i}>
                                <img src={project.image} alt="" />

                                <div className="content">
                                    <h3>{project.title}</h3>

                                    <div className="tech">
                                        {project.tech.map((t, i) => (
                                            <span key={i}>{t}</span>
                                        ))}
                                    </div>

                                    <a href={project.link} target="_blank"><button className="view">View Project</button></a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </main>
    )
}