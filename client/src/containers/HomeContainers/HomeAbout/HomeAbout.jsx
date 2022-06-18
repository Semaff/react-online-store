import { Banner } from "../../../components";
import "./HomeAbout.scss"

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__inner" style={{ background: "url('./images/about-bg.jpg') center no-repeat" }}>

                    <div className="about__item" style={{ marginBottom: '1rem' }}>
                        <img src="./images/about-2.jpg" alt="about2" className="about__img" />

                        <div className="about__banner" style={{ marginTop: '-9rem' }}>
                            <Banner
                                title="Women's"
                                subTitle="Collection"
                                text="Et harum quidem rerum facilis est et expedita m libero tempore, cum solut"
                                btnText="Shop Now"
                            />
                        </div>
                    </div>

                    <div className="about__item" style={{ marginTop: '1rem' }}>
                        <div className="about__banner" style={{ marginBottom: '-9rem' }}>
                            <Banner
                                title="Men's"
                                subTitle="Collection"
                                text="Et harum quidem rerum facilis est et expedita m libero tempore, cum solut"
                                btnText="Shop Now"
                            />
                        </div>

                        <img src="./images/about-1.jpg" alt="about1" className="about__img" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;