import Banner from "../Banner/Banner";
import "./About.scss"

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__inner" style={{ background: "url('./images/about-bg.jpg') center no-repeat" }}>

                    <div className="about__item" style={{ marginBottom: '1rem' }}>
                        <img src="https://placehold.jp/1000x1000.png" alt="about1" className="about__img" />

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
                                title="Women's"
                                subTitle="Collection"
                                text="Et harum quidem rerum facilis est et expedita m libero tempore, cum solut"
                                btnText="Shop Now"
                            />
                        </div>

                        <img src="https://placehold.jp/1000x1000.png" alt="about2" className="about__img" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;