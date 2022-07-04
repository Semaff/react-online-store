import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrands } from '../../store/brandsSlice';
import { createCategoryBrand, deleteCategoryBrand, fetchOneCategory, selectCategories, selectCategory } from '../../store/categoriesSlice';
import MySelect from '../_Inputs/MySelect/MySelect';
import "./Modal.scss";

const CategoryBrandModal = ({ show, setShow, view }) => {
    /* Select what we need from State */
    const categories = useSelector(selectCategories);
    const category = useSelector(selectCategory);
    const brands = useSelector(selectBrands);
    const dispatch = useDispatch();

    /* Select unused Brands for specific Category */
    const [unusedCategoryBrands, setUnusedCategoryBrands] = useState([]);

    /* Options for MySelect */
    const categoriesOptions = categories?.map(category => category.name + ` (Id: ${category.id}) amount: ${category.amount}`);
    const unusedCategoryBrandsOptions = unusedCategoryBrands?.map(brand => brand.name + ` (Id: ${brand.id})`);
    const usedCategoryBrandsOptions = category.brands?.map(brand => brand.name + ` (Id: ${brand.id})`);
    const [categoryOption, setCategoryOption] = useState("default");
    const [brandOption, setBrandOption] = useState("default");

    /* If Category/Brand changed, then we should update unusedCategoryBrands */
    useEffect(() => {
        if (Object.keys(category).length > 0) {
            const categoryBrandIds = category.brands.map(categBrand => categBrand.category_brand.brandId);
            const newUnusedCategBrands = [];
            for (let brand of brands) {
                if (!categoryBrandIds.includes(brand.id)) {
                    newUnusedCategBrands.push(brand);
                }
            }
            setUnusedCategoryBrands(newUnusedCategBrands)
        }
    }, [brands, category, dispatch]);

    /* Fetch Category by categoryId every time we change option */
    useEffect(() => {
        if (categoryOption !== "default") {
            const categoryId = +categoryOption.match(/(?<=\(Id: ).+(?=\))/g);
            dispatch(fetchOneCategory(categoryId));
        };
    }, [dispatch, categoryOption]);

    /* Handle submit (Create / Delete Category's Brand) */
    const handleSubmit = () => {
        const brandId = +brandOption.match(/(?<=\(Id: ).+(?=\))/g);
        const categoryId = +categoryOption.match(/(?<=\(Id: ).+(?=\))/g);

        if (view === "create") {
            dispatch(createCategoryBrand({ brandId, categoryId }));
        } else if (view === "delete") {
            dispatch(deleteCategoryBrand({ brandId, categoryId }));
        }

        dispatch(fetchOneCategory(categoryId));
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

                <MySelect
                    labelText="Choose category"
                    name="category"
                    isImportant
                    options={categoriesOptions}
                    value={categoryOption}
                    onChange={(e) => setCategoryOption(e.target.value)}
                />

                {view === "create" && (
                    <MySelect
                        labelText="Choose brand"
                        name="unusedBrand"
                        isImportant
                        options={unusedCategoryBrandsOptions}
                        value={brandOption}
                        onChange={(e) => setBrandOption(e.target.value)}
                    />
                )}

                {view === "delete" && (
                    <MySelect
                        labelText="Choose brand"
                        name="usedBrand"
                        isImportant
                        options={usedCategoryBrandsOptions}
                        value={brandOption}
                        onChange={(e) => setBrandOption(e.target.value)}
                    />
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