import React from 'react'
import "../about/info.css"

const Info = () => {
  return (
    
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bxs-bookmark-star about__icon'></i>
            <h4 className="about__title">Experience</h4>
            <span className="about__subtitle">Freelancer</span>
        </div>
        <div className="about__box">
        <i class='bx bxs-briefcase about__icon'></i>
            <h4 className="about__title">Completd</h4>
            <span className="about__subtitle">3 projects</span>
        </div>
        <div className="about__box">
        <i class='bx bx-support about__icon' ></i>
            <h4 className="about__title">Support</h4>
            <span className="about__subtitle">24/7</span>
        </div>
    </div>
    
  )
}

export default Info