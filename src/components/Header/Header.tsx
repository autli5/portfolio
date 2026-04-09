import { useState } from "react";
import "./Header.css";
import langData from "../../data/language.json";

export default function Header() {

    const [lang, setLang] = useState<"ru" | "en">("ru");

    const toggleLang = () => {
        setLang(prev => (prev === "ru" ? "en" : "ru"));
    };

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    const t = langData[lang];

    return (
        <header className="header">
            <div className="container header-inner">
                
                <div className="logo">
                    <h1>Autli</h1>
                </div>

                <nav className="nav">
                    <ul>
                        <li><a onClick={() => scrollTo("home")}>{t.home}</a></li>
                        <li><a onClick={() => scrollTo("about")}>{t.about}</a></li>
                        <li><a onClick={() => scrollTo("projects")}>{t.projects}</a></li>
                    </ul>
                </nav>


                <div className="right">
                    <a className="contactMe" onClick={() => scrollTo("contact")}>
                        {t.contact}
                    </a>
                    <div className="lang" onClick={toggleLang}>
                        <p>{lang === "ru" ? "EN" : "RU"}</p>
                    </div>
                </div>


            </div>
        </header>
    );
}