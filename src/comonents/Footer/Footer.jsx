import React from 'react'
import "../Footer/footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Navneet</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Qualifications</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/navneet1402kumar/" className="footer__social-link" target={'_blank'}>
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="" className="footer__social-link" target={'_blank'}>
                        <i class="bx bxl-github"></i>
                    </a>

                    <a href="" className="footer__social-link" target={'_blank'}>
                        <i class="bx bxl-facebook"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; Navneet Kumar. All Rights Reserved</span>
            </div>
        </footer>
    )
}

export default Footer