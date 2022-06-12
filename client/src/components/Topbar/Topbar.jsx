import { Mail, Tag } from "../_SVG";
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
                        <a href="mailto:demo.store@gmail.com">demo.store@gmail.com</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Topbar;