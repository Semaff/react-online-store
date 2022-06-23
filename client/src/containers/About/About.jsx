import { Banner } from "../../components";
import "./About.scss"

const About = ({ isMini }) => {
    return (
        <div className={`about ${isMini ? "--mini" : ""}`} style={
            !isMini ? { backgroundImage: "url('./images/about-bg.jpg')" } : null
        }>

            <div className="about__item">
                <img src={isMini ? `./images/about-3.jpg` : `./images/about-2.jpg`} alt="1" className="about__img" />

                <div className="about__banner">
                    {isMini
                        ?
                        <Banner isMini subTitle="Summer Collection" priceText="up to 70% off" btnText="Read More" />
                        :
                        <Banner
                            title="Women's"
                            subTitle="Collection"
                            text="Et harum quidem rerum facilis est et expedita m libero tempore, cum solut"
                            btnText="Shop Now"
                        />
                    }
                </div>
            </div>

            <div className="about__item  --reversed">
                <div className="about__banner  --reversed">
                    {isMini
                        ?
                        <Banner isMini subTitle="Summer Collection" priceText="up to 70% off" btnText="Read More" />
                        :
                        <Banner
                            title="Men's"
                            subTitle="Collection"
                            text="Et harum quidem rerum facilis est et expedita m libero tempore, cum solut"
                            btnText="Shop Now"
                        />
                    }
                </div>

                <img src={isMini ? `./images/about-4.jpg` : `./images/about-1.jpg`} alt="2" className="about__img" />
            </div>
        </div>
    )
}

export default About;