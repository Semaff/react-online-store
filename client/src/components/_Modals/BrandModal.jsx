import React from 'react';
import MyInput from '../_Inputs/MyInput/MyInput';
import MySelect from '../_Inputs/MySelect/MySelect';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrand, deleteBrand, selectBrands, updateBrand } from '../../store/brandsSlice';
import "./Modal.scss";

const BrandModal = ({ show, setShow, view }) => {
    const brands = useSelector(selectBrands);
    const brandsOptions = brands.map(brand => brand.name + ` (Id: ${brand.id})`);

    const [brandName, setBrandName] = useState("");
    const [option, setOption] = useState(brandsOptions[0] || "(Id: 1)");
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const brandId = +option.match(/(?<=\(Id: ).+(?=\))/g);

        if (view === "create") {
            dispatch(createBrand({ name: brandName }));
        } else if (view === "update") {
            dispatch(updateBrand({ id: brandId, name: brandName }));
        } else if (view === "delete") {
            dispatch(deleteBrand(brandId));
        }

        setBrandName("");
        setShow(false);
    }

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
                        type='button'
                        className='toggle'
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
                        onChange={e => setBrandName(e.target.value)}
                    />
                )}

                {view === "update" && (
                    <>
                        <MySelect
                            labelText="Choose brand"
                            name="brand"
                            isImportant
                            options={brandsOptions}
                            onChange={(e) => setOption(e.target.value)}
                        />

                        <MyInput
                            labelText="Update name"
                            placeholder="Brand name.."
                            name="name"
                            value={brandName}
                            onChange={e => setBrandName(e.target.value)}
                        />
                    </>
                )}

                {view === "delete" && (
                    <>
                        <MySelect
                            labelText="Delete category"
                            name="category"
                            options={brandsOptions}
                            onChange={(e) => setOption(e.target.value)}
                        />
                    </>
                )}

                <button className='btn  --poppins --black --small' onClick={() => handleSubmit()}>
                    {view === "create" && "Create"}
                    {view === "update" && "Update"}
                    {view === "delete" && "Delete"}
                </button>
            </div>
        </div>
    )
}

export default BrandModal;