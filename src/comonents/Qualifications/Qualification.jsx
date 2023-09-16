import React, { useState } from 'react'
import "./qualification.css"


const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
      setToggleState(index);
  }
  return (
    <section className="qualification section" id='portfolio'>
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Journey till now</span>

      <div className="qualification__container conatiner">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ?"qualification__button qualification__active button--flex" : "qualification__button"}>
            <i className="uil uil-graduation-cap qualification__icon"></i>{""}
            Education
          </div>

          <div className={toggleState === 2 ?"qualification__button qualification__active button--flex" : "qualification__button"}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div className= {toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content qualification__content-active"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Graduation</h3>
                <span className="qualification__subtitle">SRMCEM</span>
                <div className="qualification__calender">
                <i class='bx bxs-calendar'></i>2021-present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>
              <div>
                <h3 className="qualification__title">Diploma</h3>
                <span className="qualification__subtitle">SRMCEM</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">

                  </i>2019-2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>
              <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">SRMCEM</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">

                  </i>2017-2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">SRMCEM</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">

                  </i>2016-2017
                </div>
              </div>
            </div>


          </div>

          <div className={toggleState === 2 ?"qualification__button qualification__active button--flex" : "qualification__button"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Intern</h3>
                <span className="qualification__subtitle">CETPA</span>
                <div className="qualification__calender">
                <i class='bx bxs-calendar'></i> February 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>
              <div>
                <h3 className="qualification__title">Intern</h3>
                <span className="qualification__subtitle">IBM</span>
                <div className="qualification__calender">
                <i className='bx bxs-calendar'></i>

                  August 2022 - september 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>
              <div>
                <h3 className="qualification__title">Intern</h3>
                <span className="qualification__subtitle">Indian Railways</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">

                  </i>July 2023 - August 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>
              <div>
                <h3 className="qualification__title">Intern</h3>
                <span className="qualification__subtitle">Digipodium</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">

                  </i>July 2023 - present
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