import React from "react";
import MyInput from "../_Inputs/MyInput/MyInput";
import MySelect from "../_Inputs/MySelect/MySelect";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrand, deleteBrand, selectBrands, updateBrand } from "../../store/brandsSlice";
import "./Modal.scss";

const BrandModal = ({ show, setShow, view }) => {
  const brands = useSelector(selectBrands);
  const brandsOptions = brands.map((brand) => brand.name + ` (Id: ${brand.id})`);

  const [brandName, setBrandName] = useState("");
  const [brandOption, setBrandOption] = useState("default");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const brandId = +brandOption.match(/(?<=\(Id: ).+(?=\))/g);

    if (view === "create") {
      dispatch(createBrand({ name: brandName }));
    } else if (view === "update") {
      dispatch(updateBrand({ id: brandId, name: brandName }));
    } else if (view === "delete") {
      dispatch(deleteBrand(brandId));
    }

    setBrandName("");
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
            <span> Brand</span>
          </h2>

          <button
            type="button"
            className="toggle"
            style={{ transform: "rotate(45deg)" }}
            onClick={() => setShow(false)}
          />
        </div>

        {view === "create" && (
          <MyInput
            labelText="Name"
            name="name"
            placeholder="Brand name.."
            isImportant
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
        )}

        {(view === "update" || view === "delete") && (
          <MySelect
            labelText="Choose brand"
            name="brand"
            isImportant
            options={brandsOptions}
            value={brandOption}
            onChange={(e) => setBrandOption(e.target.value)}
          />
        )}

        {view === "update" && (
          <MyInput
            labelText="Update name"
            placeholder="Brand name.."
            name="name"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
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

export default BrandModal;
