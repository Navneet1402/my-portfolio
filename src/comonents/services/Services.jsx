import React, { useState } from 'react'
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);

    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">Things i offer</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil services__icon"></i>
                        <h3 className="services__title">Product<br/> Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times uil-arrow-right services__modal-close"></i>

                            <h3 className="services__modal-title"></h3>
                            <p className="services__modal-description">I provide quality work to clients and solve their issues consistently.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop the Frontend and Backend</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design the websites.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I focus on making user experience smooth.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil services__icon"></i>
                        <h3 className="services__title">Website Designer</h3>
                    </div>

                    <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times uil-arrow-right services__modal-close"></i>

                            <h3 className="services__modal-title">Website Designer</h3>
                            <p className="services__modal-description">I provide quality work to clients and solve their issues consistently.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop the Frontend and Backend</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design the websites.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I focus on making user experience smooth.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil services__icon"></i>
                        <h3 className="services__title">UI-UX Designer</h3>
                    </div>

                    <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times uil-arrow-right services__modal-close"></i>

                            <h3 className="services__modal-title">UI-UX</h3>
                            <p className="services__modal-description">I provide quality work to clients and solve their issues consistently.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop the Frontend and Backend</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design the websites.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I focus on making user experience smooth.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Services