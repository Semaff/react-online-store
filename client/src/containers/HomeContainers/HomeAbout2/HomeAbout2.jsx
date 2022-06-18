import { Banner } from "../../../components";
import "./HomeAbout2.scss";

const About2 = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="about2">
                    <div className="about2__img" style={{ background: "url('./images/about-3.jpg') center no-repeat" }}>
                        <div className="about2__banner  --reversed">
                            <Banner
                                isMini
                                subTitle="Summer Collection"
                                priceText="up to 70% off"
                                btnText="Read More"
                            />
                        </div>
                    </div>

                    <div className="about2__img" style={{ background: "url('./images/about-4.jpg') center no-repeat" }}>
                        <div className="about2__banner">
                            <Banner
                                isMini
                                subTitle="Summer Collection"
                                priceText="up to 70% off"
                                btnText="Read More"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;