import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="top"></div>
                <div className="bottom">
                    <div className="left">
                        <p>© {new Date().getFullYear()} Autli. Все права защищены.</p>
                    </div>
                    <div className="right">
                        <p>Сделано 💚 от Autli</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}