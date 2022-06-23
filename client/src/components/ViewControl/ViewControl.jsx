import React, { useRef } from "react";
import MySelect from "../_Inputs/MySelect/MySelect";
import { Grid, Lines, List } from "../_SVG";
import "./ViewControl.scss";

const ViewControl = ({ setView }) => {
    const currentView = useRef();

    const changeView = (e, view) => {
        // Remove class + change Use Ref current View
        currentView.current.classList.remove("active");
        currentView.current = e.currentTarget;

        // Set View
        e.currentTarget.classList.add("active");
        setView(view);
    }

    return (
        <div className="view-control">
            <div className="view-control__position">
                <a href="#a" onClick={(e) => changeView(e, "grid")} ref={currentView} className="active"><Grid /></a>
                <a href="#a" onClick={(e) => changeView(e, "list")}><List /></a>
                <a href="#a" onClick={(e) => changeView(e, "short")}><Lines /></a>
            </div>

            <div className="view-control__sort">
                <div className="view-control__select">
                    <span>Show</span>
                    <MySelect
                        defaultValue="--"
                        name="show"
                        options={[12, 8]}
                    />
                </div>

                <div className="view-control__select">
                    <span>Sort by</span>
                    <MySelect
                        name="sort"
                        options={["Ascending", "Descending"]}
                    />
                </div>
            </div>
        </div>
    )
}

export default ViewControl;