import Banner from "../Banner/Banner";
import "./About.scss"

const About = () => {
    return (
        <section className="about">
            <div className="container">

                <div className="about__inner" style={{ background: "url('./images/about-bg.jpg') center no-repeat" }}>

                    <div className="about__item" style={{ marginBottom: '10px' }}>
                        <div className="about__img"></div>

                        <Banner
                            addMarginTop
                            title="Women's"
                            subTitle="Collection"
                            text="Et harum quidem rerum facilis est et expedita m libero tempore, cum solut"
                            btnText="Shop Now"
                        />
                    </div>

                    <div className="about__item" style={{ marginTop: '10px' }}>
                        <Banner
                            addMarginBottom
                            title="Men's"
                            subTitle="Collection"
                            text="Et harum quidem rerum facilis est et expedita m libero tempore, cum solut"
                            btnText="Shop Now"
                        />

                        <div className="about__img"></div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About;