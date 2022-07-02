import { Arrow } from "../_SVG";
import "./Pagination.scss";

const Pagination = ({ totalProducts, searchParams, handlePageChange }) => {
    const limit = searchParams.get("limit") || 12;
    const page = searchParams.get("page") || 1;
    const pages = [];

    let totalProductsOnAPage;
    if (limit * page >= totalProducts) {
        totalProductsOnAPage = totalProducts;
    } else {
        totalProductsOnAPage = limit * page
    }

    for (let i = 0; i < Math.ceil(totalProducts / limit); i++) {
        pages.push(+i + 1);
    }

    return (
        <div className="pagination">
            <p className="pagination__info">
                <span> Showing {(1 * limit * (page - 1)) || 1} to </span>
                <span> {totalProductsOnAPage} of {totalProducts} </span>
                <span> ({pages[pages.length - 1]} pages) </span>
            </p>

            <div className="pagination__btns">
                <button onClick={() => handlePageChange(pages.length, page - 1)} className="btn --rounded --border --reversed">
                    <Arrow />
                </button>

                {pages.map(pageIndex => (
                    <button
                        key={pageIndex}
                        onClick={() => handlePageChange(pages.length, pageIndex)}
                        className={`btn --rounded --border ${+page === pageIndex ? "active" : ""}`}
                    >
                        {pageIndex}
                    </button>
                ))}

                <button onClick={() => handlePageChange(pages.length, page + 1)} className="btn --rounded --border">
                    <Arrow />
                </button>
            </div>
        </div>
    )
}

export default Pagination;