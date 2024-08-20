import React, { useState } from "react";
import MyInput from "../_Inputs/MyInput/MyInput";
import MySelect from "../_Inputs/MySelect/MySelect";
import MyTextArea from "../_Inputs/MyTextArea/MyTextArea";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  deleteCategory,
  fetchCategories,
  selectCategories,
  updateCategory,
} from "../../store/categoriesSlice";
import "./Modal.scss";

const CategoryModal = ({ show, setShow, view }) => {
  /* Select what we need from state */
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  /* Category Columns */
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  /* Category Option for MySelect */
  const categoriesOptions = categories.map(
    (category) => category.name + ` (Id: ${category.id}) amount: ${category.amount}`,
  );
  const [categoryOption, setCategoryOption] = useState("default");

  /* Handle Submit (Create/Update/Delete Category) */
  const handleSubmit = () => {
    const categoryId = +categoryOption.match(/(?<=\(Id: ).+(?=\))/g);

    if (view === "create") {
      dispatch(createCategory({ name: categoryName, description: categoryDescription }));
    } else if (view === "update") {
      dispatch(updateCategory({ id: categoryId, name: categoryName }));
    } else if (view === "delete") {
      dispatch(deleteCategory(categoryId));
    }

    dispatch(fetchCategories());
    setCategoryName("");
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__title">
          <h2>
            {view === "create" && "Create"}
            {view === "update" && "Update"}
            {view === "delete" && "Delete"}
            <span> Category</span>
          </h2>

          <button
            type="button"
            className="toggle"
            style={{ transform: "rotate(45deg)" }}
            onClick={() => setShow(false)}
          />
        </div>

        {view === "create" && (
          <>
            <MyInput
              labelText="Name"
              name="name"
              placeholder="Category name.."
              isImportant
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />

            <MyTextArea
              labelText="Description"
              name="description"
              placeholder="Description.."
              value={categoryDescription}
              onChange={(e) => setCategoryDescription(e.target.value)}
            />
          </>
        )}

        {(view === "update" || view === "delete") && (
          <MySelect
            labelText="Choose category"
            name="category"
            isImportant
            options={categoriesOptions}
            value={categoryOption}
            onChange={(e) => setCategoryOption(e.target.value)}
          />
        )}

        {view === "update" && (
          <>
            <MyInput
              labelText="Update name"
              placeholder="Category name.."
              name="name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />

            <MyTextArea
              labelText="Description"
              name="description"
              placeholder="Description.."
              value={categoryDescription}
              onChange={(e) => setCategoryDescription(e.target.value)}
            />
          </>
        )}

        <button className="btn  --poppins --black --small" onClick={() => handleSubmit()}>
          {view === "create" && "Create"}
          {view === "update" && "Update"}
          {view === "delete" && "Delete"}
        </button>
      </div>
    </div>
  );
};

export default CategoryModal;
