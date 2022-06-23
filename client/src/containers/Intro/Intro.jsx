import "./Intro.scss";

const Intro = () => {
    return (
        <div className="intro" style={{ backgroundImage: "url('./images/intro.jpg')" }}>
            <h2 className="intro__suptitle">Our specials</h2>
            <h1 className="intro__title">Fashion Trend</h1>

            <button className="btn" type="button">Shop now</button>
        </div>
    )
}

export default Intro;