import React, { useRef } from "react";
import { Grid, Lines, List } from "../_SVG";
import { MySelect } from "../index";
import "./ViewControl.scss";

const ViewControl = ({ setView, onSelectClick }) => {
    const currentView = useRef();

    const changeView = (e, view) => {
        // Remove class + change Use Ref current View
        currentView.current.classList.remove("active");
        currentView.current = e.currentTarget;

        // Set View
        currentView.current.classList.add("active");
        setView(view);
    }

    return (
        <div className="view-control">
            <div className="view-control__position">
                <button onClick={(e) => changeView(e, "grid")} ref={currentView} className="active">
                    <Grid />
                </button>
                <button onClick={(e) => changeView(e, "list")}>
                    <List />
                </button>
                <button onClick={(e) => changeView(e, "short")}>
                    <Lines />
                </button>
            </div>

            <div className="view-control__sort">
                <div className="view-control__select">
                    <span>Show</span>
                    <MySelect
                        onChange={e => onSelectClick("limit", e.target.value)}
                        name="limit"
                        options={[12, 8]}
                    />
                </div>

                <div className="view-control__select">
                    <span>Sort by</span>
                    <MySelect
                        onChange={e => onSelectClick("order", e.target.value)}
                        name="order"
                        options={["Default", "Ascending", "Descending"]}
                    />
                </div>
            </div>
        </div>
    )
}

export default ViewControl;