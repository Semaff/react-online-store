import React from 'react';
import { Mail, Map, Phone } from '../../../components/_SVG';
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">

                    <div className="footer__info">
                        <img src="./images/logo-white.png" alt="logo" />
                        <div className="footer__text">
                            <p>
                                Sed ut perspiciatis unde omnis iste natus
                                error sit voluptatem... perspiciatis unde
                                iste natus
                            </p>
                        </div>
                    </div>

                    <div className="footer__contacts">
                        <div className="footer__title">Contact us</div>

                        <div className="footer__contacts-item">
                            <Map />
                            A-103, Shivalik Plaza, Nr. Uttran
                            Bridge, Surat, Gujarat 394010
                        </div>

                        <div className="footer__contacts-item">
                            <Phone />
                            092770-77088
                        </div>

                        <div className="footer__contacts-item">
                            <Mail />
                            mini@templatetrip.com
                        </div>
                    </div>

                </div>

                <div className="footer__copyright">
                    <p>
                        2021 Copyright, All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;