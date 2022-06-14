import "./Testimonial.scss";

const Testimonial = () => {
    return (
        <div className="testimonial">
            <img className="testimonial__img" src="https://placehold.jp/200x200.png" alt="testimoImg" />

            <div className="testimonial__text">
                <p>
                    Dunt purus blandit arrc ullamcorper Aliquam a iaculis est Dunt purus blandit
                    arrc ullamcorper Aliquam a iaculis est...
                </p>
            </div>

            <div className="testimonial__desc">
                <h3>John Doe</h3>
                <h3>Ceo & Founder</h3>
            </div>
        </div>
    )
}

export default Testimonial;