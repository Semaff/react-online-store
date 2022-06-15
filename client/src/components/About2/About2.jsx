import Banner from "../Banner/Banner";
import "./About2.scss";

const About2 = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="about2">
                    <div className="about2__img" style={{ backgroundImage: "url('https://placehold.jp/3d4070/ffffff/400x600.png')" }}>
                        <div className="about2__banner  --reversed">
                            <Banner
                                isMini
                                subTitle="Summer Collection"
                                priceText="up to 70% off"
                                btnText="Read More"
                            />
                        </div>
                    </div>

                    <div className="about2__img" style={{ backgroundImage: "url('https://placehold.jp/3d4070/ffffff/400x600.png')" }}>
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