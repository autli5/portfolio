import "./Header.css"

export default function Header() {

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
        <header className="header">
            <div className="container header-inner">
                
                <div className="logo">
                    <h1>Autli</h1>
                </div>

                <nav className="nav">
                    <ul>
                        <li><a onClick={() => scrollTo("home")}>Главная</a></li>
                        <li><a onClick={() => scrollTo("about")}>Обо мне</a></li>
                        <li><a onClick={() => scrollTo("projects")}>Проекты</a></li>
                    </ul>
                </nav>

                <a className="contactMe" onClick={() => scrollTo("contact")}>
                    Связаться
                </a>

            </div>
        </header>
    )
}