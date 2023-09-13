import React from 'react'
import "./qualification.css"

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Journey till now</span>

            <div className="qualification__container container">
                <div className="qualification__button">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon">Education</i>
                        
                    </div>
                    <div className="qualification__tabs">


                        {/* <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div> */}
                    </div>
                    <div className="qualification__sections">
                        <div className="qualification__content">
                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Computer Science</h3>
                                    <span className="qualification__subtitle">
                                        Institute

                                    </span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt">
                                        </i>2021-present
                                    </div>
                                </div>
                                <br />

                                <div className="qualification__data">
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                    <div>
                                        <h3 className="qualification__title">Diploma</h3>
                                        <span className="qualification__subtitle">
                                            GITM

                                        </span>
                                        <div className="qualification__calender">
                                            <i className="uil uil-calender-alt">
                                            </i>2019-2021
                                        </div>
                                    </div>
                                    <br />

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <div className="qualification__line"></div>
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <div className="qualification__line"></div>
                                </div>
                            </div>
                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Intermediate</h3>
                                    <span className="qualification__subtitle">
                                        Institute

                                    </span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt">
                                        </i>2017-2019
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <div className="qualification__line"></div>
                                </div>
                            </div>
                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <br />
                                <div>
                                    <h3 className="qualification__title">High school</h3>
                                    <span className="qualification__subtitle">
                                        Institute

                                    </span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calender-alt">
                                        </i>2021-present
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <div className="qualification__line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification