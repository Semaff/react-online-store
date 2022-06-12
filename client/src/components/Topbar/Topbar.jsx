import Mail from "../../components/svg/Mail";
import Tag from "../../components/svg/Tag";
import "./Topbar.scss"

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="container">
                <div className="topbar__inner">
                    <span className="topbar__left">
                        <Tag />
                        Wants to explore Upcoming Deals on Weekends?
                    </span>

                    <span className="topbar__right">
                        <Mail />
                        demo.store@gmail.com
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Topbar;