import "./Timeline.scss"

const Timeline = ({ page }) => {
    return (
        <section className="timeline" style={{backgroundImage: "url('./images/timeline.jpg')"}}>
            <div className="container">

                <div className="timeline__text">Home / {page}</div>

            </div>
        </section>
    )
}

export default Timeline;