import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            setMenuOpen(false); // закрываем меню после клика
        }
    };

    return (
        <header className="header">
            <div className="container header-inner">
                
                <div className="logo">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <h1>Autli</h1>
                    </Link>
                </div>

                {/* БУРГЕР */}
                <div 
                    className={`burger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* НАВИГАЦИЯ */}
                <nav className={`nav ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li><a onClick={() => scrollTo("home")}>Главная</a></li>
                        <li><a onClick={() => scrollTo("about")}>Обо мне</a></li>
                        <li><a onClick={() => scrollTo("projects")}>Проекты</a></li>
                    </ul>

                    {/* КНОПКА ВНУТРИ МЕНЮ */}
                    <div className="mobile-contact">
                        <a onClick={() => scrollTo("contact")} className="contactMe">
                            Связаться
                        </a>
                    </div>
                </nav>
                <div className="right">
                    <a className="contactMe" onClick={() => scrollTo("contact")}>
                        Связаться
                    </a>
                </div>

            </div>
        </header>
    );
}