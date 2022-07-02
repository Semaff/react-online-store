import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrands } from '../../store/brandsSlice';
import { createCategoryBrand, deleteCategoryBrand, fetchOneCategory, selectCategories, selectCategory } from '../../store/categoriesSlice';
import MySelect from '../_Inputs/MySelect/MySelect';
import "./Modal.scss";

const CategoryBrandModal = ({ show, setShow, view }) => {
    const categories = useSelector(selectCategories);
    const brands = useSelector(selectBrands);
    const dispatch = useDispatch();

    // Categories options for MySelect
    const categoriesOptions = categories.map(category => category.name + ` (Id: ${category.id}) amount: ${category.amount}`);
    const [categoryOption, setCategoryOption] = useState("(Id: 1)");

    // Select unused and used Brands for specific Category
    const category = useSelector(selectCategory);
    const categoryBrands = category.brands;
    const unusedCategoryBrands = [];
    const usedCategoryBrands = [];

    if (Object.keys(category).length > 0) {
        const categoryBrandIds = categoryBrands.map(categBrand => categBrand.category_brand.brandId);

        for (let brand of brands) {
            if (categoryBrandIds.includes(brand.id)) {
                usedCategoryBrands.push(brand)
            } else {
                unusedCategoryBrands.push(brand)
            }
        }
    }

    const unusedCategoryBrandsOptions = unusedCategoryBrands.map(brand => brand.name + ` (Id: ${brand.id})`);
    const usedCategoryBrandsOptions = usedCategoryBrands.map(brand => brand.name + ` (Id: ${brand.id})`);
    const [brandOption, setBrandOption] = useState(null);

    // Fetch Category by categoryId every time we change option
    useEffect(() => {
        const categoryId = +categoryOption.match(/(?<=\(Id: ).+(?=\))/g);
        dispatch(fetchOneCategory(categoryId))
    }, [categoryOption, dispatch]);

    // Handle submit (Create / Delete Category's Brand)
    const handleSubmit = () => {
        const brandId = +brandOption.match(/(?<=\(Id: ).+(?=\))/g);
        const categoryId = +categoryOption.match(/(?<=\(Id: ).+(?=\))/g);

        if (view === "create") {
            dispatch(createCategoryBrand({ brandId, categoryId }));
        } else if (view === "delete") {
            dispatch(deleteCategoryBrand({ brandId, categoryId }));
        }

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
                        <span> Category's Brand</span>
                    </h2>

                    <button
                        type='button'
                        className='toggle'
                        style={{ transform: "rotate(45deg)" }}
                        onClick={() => setShow(false)}
                    />
                </div>

                {view === "create" && (
                    <>
                        <MySelect
                            labelText="Choose category"
                            name="category"
                            isImportant
                            options={categoriesOptions}
                            onChange={(e) => setCategoryOption(e.target.value)}
                        />
                        
                        <MySelect
                            labelText="Choose brand"
                            name="unusedBrand"
                            isImportant
                            options={unusedCategoryBrandsOptions}
                            onChange={(e) => setBrandOption(e.target.value)}
                        />
                    </>
                )}

                {view === "delete" && (
                    <>
                        <MySelect
                            labelText="Choose category"
                            name="category"
                            isImportant
                            options={categoriesOptions}
                            onChange={(e) => setCategoryOption(e.target.value)}
                        />

                        <MySelect
                            labelText="Choose brand"
                            name="usedBrand"
                            isImportant
                            options={usedCategoryBrandsOptions}
                            onChange={(e) => setBrandOption(e.target.value)}
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

export default CategoryBrandModal;