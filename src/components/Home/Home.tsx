import "./Home.css"

import avatar from "../../assets/avatar/avatar.png"
import email from "../../assets/svg/email.svg"
import github from "../../assets/svg/github.svg"

export default function Home() {
    
    const techStack = [
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
        { name: 'Vite', icon: '⚡' },
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: 'TS' },
    ];
    
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    
    return (
        <>
            <section className="home" id="home">
                <div className="container">
                    
                    <div className="oval">
                        <div className="status">
                            <span className="dot"></span>
                            В разработке
                        </div>
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
                                <a href="#contact" className="btn primary">Связаться</a>
                                <a className="btn outline" onClick={() => scrollTo("projects")} style={{ cursor: "pointer" }}>Проекты</a>
                            </div>

                            <div className="links">
                                <a href="https://github.com/autli5" target="_blank" rel="noreferrer">
                                    <img src={github} alt="" />
                                </a>
                                <a href="mailto:autli@list.ru">
                                    <img src={email} alt="" />
                                </a>
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

                </div>
            </section>
        </>
    )
}