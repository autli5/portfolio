import "./Contact.css"
import email from "../../assets/svg/email.svg"
import phone from "../../assets/svg/phone.svg"
import location from "../../assets/svg/location.svg"

export default function Contact() {
    return (

        <section className="contact" id="contact">
            <div className="container">
                <div className="contact-header">
                    <p className="label">Связь</p>
                    <h1><span className="name">Связь</span> со мной</h1>
                    <div className="line"></div>
                </div>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div className="contact-header">
                            <h2 className="contact-title">Давайте работать вместе</h2>
                            <p className="contact-description">
                                Я всегда открыт для обсуждения новых проектов, 
                                креативных идей или возможностей стать частью 
                                вашего видения. Не стесняйтесь обращаться ко мне 
                                напрямую.
                            </p>
                        </div>

                        <div className="contact-cards">
                            <div className="contact-card">
                                <div className="card-icon">
                                    <img src={email} alt="Email" />
                                </div>
                                <div className="card-content">
                                    <span className="card-label">Email</span>
                                    <p className="card-value">autli@list.ru</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="card-icon">
                                    <img src={phone} alt="Phone" />
                                </div>
                                <div className="card-content">
                                    <span className="card-label">Phone</span>
                                    <p className="card-value">+7 (922) 849-37-95</p>
                                </div>
                            </div>
                        </div>

                        <div className="map-container">
                            <div className="map-placeholder">
                                <img src={location} alt="Map" className="map-icon" />
                                <span>Map View</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}