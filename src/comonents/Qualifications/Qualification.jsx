import React, { useState } from 'react'
import "./qualification.css"


const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className='qualification__sections' id='portfolio'>
      <h3 className='section__title'>Qualifications</h3>
      <span className='section__subtitle'>My Journey till now</span>
      <div className='qualification-card container card col-md-3 mt-5'>
        <div className='qualification__content'>
          <div className='qualification__data'>
            <div>
              <h3 className='qualification__title'>Bachelor of technology</h3>
              <span className='qualification__subtitle'>SRMCEM </span>
              <div className="qualification__calender">
                <i className='uil uil-calender-alt'></i>2021-present
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

          </div>
          <div className='qualification__data'>
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className='qualification__title'>Diploma</h3>
              <span className='qualification__subtitle'>GITM </span>
              <div className="qualification__calender">
                <i className='uil uil-calender-alt'></i>2019-2021
              </div>
            </div>
            
          </div>
          <div className='qualification__data'>
            <div>
              <h3 className='qualification__title'>Intermediate</h3>
              <span className='qualification__subtitle'>LMPIC </span>
              <div className="qualification__calender">
                <i className='uil uil-calender-alt'></i>2017-2019
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <div className="qualification__line"></div>
            </div>

          </div>
          <div className='qualification__data'>
            <div>
              <h3 className='qualification__title'>High School</h3>
              <span className='qualification__subtitle'>SRMCEM </span>
              <div className="qualification__calender">
                <i className='uil uil-calender-alt'></i>2016-2017
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <div className="qualification__line"></div>
            </div>

          </div>

        </div>


      </div>
    </section>


  )
}

export default Qualification