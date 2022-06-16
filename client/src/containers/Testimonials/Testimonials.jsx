import { Carousel, Testimonial } from "../../components";
import "./Testimonials.scss";

const Testimonials = () => {
    const getTestimonials = () => {
        let data = [];

        for (let i = 0; i < 10; i++) {
            data.push(<Testimonial key={i} name={"Product"} price={105.25} oldPrice={105.25} rating={4.2} />)
        }

        return data;
    }

    return (
        <section className="testimonaials" style={{ backgroundImage: "url('./images/testimonials.jpg')" }}>
            <div className="container" style={{ opacity: "1" }}>

                <Carousel>
                    {getTestimonials()}
                </Carousel>

            </div>
        </section>
    )
}

export default Testimonials;