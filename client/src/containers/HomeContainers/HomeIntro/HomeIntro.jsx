import "./HomeIntro.scss";

const Intro = () => {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro__inner" style={{background: "url('./images/intro.jpg') center no-repeat", backgroundSize: "cover"}}>
                    
                    <h2 className="intro__suptitle">Our specials</h2>
                    <h1 className="intro__title">Fashion Trend</h1>

                    <button className="btn" type="button">Shop now</button>
        
                </div>
            </div>
        </section>
    )
}

export default Intro;