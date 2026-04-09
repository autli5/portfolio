import "./Services.css"

import services from "../../data/services";


export default function Services() {
    return (
        <section className="services">
            <div className="container">

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
        </section>

    )
}