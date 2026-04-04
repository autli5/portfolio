import "../styles/components/Header.css"

export default function Header() {
    return (
        <header className="header">
            <div className="container header-inner">
                <div className="logo">
                    <h1>Autli</h1>
                </div>

                <nav className="nav">
                    <ul>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Обо мне</a></li>
                        <li><a href="#">Проекты</a></li>
                    </ul>
                </nav>

                <a className="contactMe" href="#">Связаться</a>
            </div>
        </header>
    )
}