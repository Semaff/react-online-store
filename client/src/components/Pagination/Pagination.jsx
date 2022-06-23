import { Arrow } from "../_SVG";
import "./Pagination.scss";

const Pagination = () => {
    return (
        <div className="pagination">
            <p className="pagination__info">
                Showing 1 to 9 of 11 (2 pages)
            </p>

            <div className="pagination__btns">
                <button className="btn --rounded --border --reversed"><Arrow /></button>
                <button className="btn active --rounded --border">1</button>
                <button className="btn --rounded --border">2</button>
                <button className="btn --rounded --border">3</button>
                <button className="btn --rounded --border"><Arrow /></button>
            </div>
        </div>
    )
}

export default Pagination;