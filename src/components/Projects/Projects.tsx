import "./Projects.css"

import { useState } from "react";

import projects from "../../data/projects";

export default function Projects() {
        const [activeFilter, setActiveFilter] = useState("All");
    
        const filters = ["All"]
    
        const filteredProjects =
            activeFilter === "All"
                ? projects
                : projects.filter(p => p.category === activeFilter);
    
    
    return (
        <section className="portfolio" id="projects">
            <div className="container">

                <div className="portfolio-header">
                    <p className="label">Портфолио</p>
                    <h1>Мои <span className="name">Проекты</span></h1>
                    <div className="line"></div>
                </div>

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

                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <button className="view">View Project</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
        
    )
}