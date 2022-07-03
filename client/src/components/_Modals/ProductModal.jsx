import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, deleteProduct, fetchOneProduct, fetchProducts, selectProduct, selectProducts, updateProduct } from '../../store/productsSlice';
import { fetchOneCategory, selectCategories, selectCategory } from '../../store/categoriesSlice';
import MyInput from '../_Inputs/MyInput/MyInput';
import MySelect from '../_Inputs/MySelect/MySelect';
import MyTextArea from '../_Inputs/MyTextArea/MyTextArea';
import "./Modal.scss";
import MyCheckBox from '../_Inputs/MyCheckBox/MyCheckBox';

const ProductModal = ({ show, setShow, view }) => {
    /* Select what we need from State */
    const products = useSelector(selectProducts);
    const product = useSelector(selectProduct);
    const categories = useSelector(selectCategories);
    const category = useSelector(selectCategory);
    const dispatch = useDispatch();

    /* Product Columns - what we need for product to be updated */
    const [productColors, setProductColors] = useState(product.colors);
    const [productSizes, setProductSizes] = useState(product.sizes || []);
    const [name, setName] = useState(product.name || "");
    const [price, setPrice] = useState(product.price || 1);
    const [description, setDescription] = useState(product.description || "");
    const [gender, setGender] = useState(product.gender || "men");
    const [quantity, setQuantity] = useState(product.quantity || 1);
    const [img, setImg] = useState(null);
    const [onASale, setOnASale] = useState(product.onASale || false);
    const [salePrice, setSalePrice] = useState(product.onASale || false);

    /* Options for MySelect */
    const categoriesOptions = categories?.map(category => category.name + ` (Id: ${category.id}) amount: ${category.amount}`);
    const productsOptions = products?.rows?.map(product => product.name + ` (Id: ${product.id})`);
    const categoryBrandsOptions = category?.brands?.map(brand => brand.name + ` (Id: ${brand.id})`);
    const sizesOptions = ["S", "L", "M", "XS", "XL", "XXL", "XXXL"];

    const colorRef = useRef();
    const [curSize, setCurSize] = useState("S");

    /* Current options in MySelect */
    const [categoryOption, setCategoryOption] = useState("");
    const [brandOption, setBrandOption] = useState("");
    const [productOption, setProductOption] = useState("");

    // Fetch One Product by it's id
    useEffect(() => {
        if (productOption) {
            const productId = +productOption.match(/(?<=\(Id: ).+(?=\))/g);
            dispatch(fetchOneProduct(productId));
        }
    }, [dispatch, productOption]);

    // And then asign variables
    useEffect(() => {
        setProductColors(product.colors || []);
        setProductSizes(product.sizes || []);
        setName(product.name || "");
        setPrice(product.price || 1);
        setDescription(product.description || "");
        setGender(product.gender || "men");
        setQuantity(product.quantity || 1);
        setOnASale(product.onASale || false);
        setSalePrice(product.salePrice || 1);

        setProductOption(product.name + `(Id: ${product.id})`);
    }, [product]);

    /* Fetch all Products to choose them in MySelect */
    useEffect(() => {
        dispatch(fetchProducts("getall=true"));
    }, [dispatch]);

    /* Fetch choosen Category */
    useEffect(() => {
        if (categoryOption) {
            const categoryId = +categoryOption.match(/(?<=\(Id: ).+(?=\))/g);
            dispatch(fetchOneCategory(categoryId));
        }
    }, [dispatch, categoryOption]);

    useEffect(() => {
        if (Object.keys(category).length > 0) {
            setCategoryOption(category.name + ` (Id: ${category.id}) amount: ${category.amount}`);
            setBrandOption(category.brands[0].name + ` (Id: ${category.brands[0].id})`)
        }
    }, [category]);

    /* Handle Submit (when we pressed the button) */
    const handleSubmit = () => {
        const brandId = +brandOption.match(/(?<=\(Id: ).+(?=\))/g);
        const categoryId = +categoryOption.match(/(?<=\(Id: ).+(?=\))/g);
        const productId = +productOption.match(/(?<=\(Id: ).+(?=\))/g);

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("gender", gender);
        formData.append("quantity", quantity);
        formData.append("colors", productColors.join(", "));
        formData.append("sizes", productSizes.join(", "));
        formData.append("img", img);
        formData.append("categoryId", categoryId);
        formData.append("brandId", brandId);
        formData.append("onASale", onASale);
        formData.append("salePrice", salePrice);

        if (view === "create") {
            dispatch(createProduct(formData));
        } else if (view === "update") {
            dispatch(updateProduct({ productId, formData }));
        } else if (view === "delete") {
            dispatch(deleteProduct(productId));
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
                        <span> Product</span>
                    </h2>

                    <button
                        type='button'
                        className='toggle'
                        style={{ transform: "rotate(45deg)" }}
                        onClick={() => setShow(false)}
                    />
                </div>

                {(view === "update" || view === "delete") && (
                    <MySelect
                        labelText="Products:"
                        name="products"
                        options={productsOptions}
                        onChange={e => setProductOption(e.target.value)}
                    />
                )}

                {view !== "delete" && (<>
                    {/* Name, Price, Description, Gender and Quantity Inputs */}
                    <MyInput
                        labelText="Name"
                        name="name"
                        placeholder="Product name.."
                        isImportant
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <MyInput
                        labelText="Price"
                        name="price"
                        type="number"
                        min="1"
                        placeholder="Product's price.."
                        isImportant
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />

                    <MyTextArea
                        labelText="Description"
                        name="description"
                        placeholder="Description.."
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <MySelect
                        labelText="Gender"
                        name="gender"
                        isImportant
                        options={["men", "women"]}
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                    />

                    <MyInput
                        labelText="Product's Quantity"
                        name="quantity"
                        type="number"
                        min="1"
                        isImportant
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                    />

                    {/* Set Colors */}
                    <div className="modal__container">
                        <button className='btn --poppins --small --black' onClick={e => {
                            const colorValue = colorRef.current.value
                            setProductColors([...productColors.filter(color => color !== colorValue), colorValue])
                        }}>
                            Add Color
                        </button>

                        <input type="color" ref={colorRef} />

                        <div className="modal__container-content">
                            {productColors && productColors.length > 0 && productColors.map(color => (
                                <div
                                    key={color}
                                    className='color'
                                    style={{ backgroundColor: color }}
                                    onClick={() => setProductColors([...productColors.filter(colorEl => colorEl !== color)])}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Set sizes */}
                    <div className="modal__container">
                        <button className='btn --poppins --small --black' onClick={() => {
                            setProductSizes([...productSizes.filter(size => size !== curSize), curSize]);
                        }}>
                            Add Size
                        </button>

                        <MySelect name="sizes" options={sizesOptions} onChange={e => setCurSize(e.target.value)} />

                        <div className="modal__container-content">
                            {productSizes && productSizes.length > 0 && productSizes.map((size) => (
                                <div key={size} onClick={() => setProductSizes([...productSizes.filter(sizeEl => sizeEl !== size)])}>
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Img, Category and Brand Inputs */}
                    <MyInput
                        labelText="Product's image"
                        type="file"
                        isImportant
                        onChange={e => setImg(e.target.files[0])}
                    />

                    {view !== "update"
                        ? (
                            <>
                                <MySelect
                                    labelText="Category"
                                    isImportant
                                    options={categoriesOptions}
                                    onChange={e => setCategoryOption(e.target.value)}
                                />

                                <MySelect
                                    labelText="Brand"
                                    isImportant
                                    options={categoryBrandsOptions}
                                    onChange={e => setBrandOption(e.target.value)}
                                />
                            </>
                        )
                        : (
                            <>
                                <MyCheckBox
                                    labelText="On A Sale"
                                    onChange={e => setOnASale(e.target.checked)}
                                    checked={product.onASale}
                                />

                                {onASale && (
                                    <MyInput
                                        labelText="Sale Price"
                                        name="saleprice"
                                        isImportant
                                        value={salePrice}
                                        onChange={e => setSalePrice(e.target.value)}
                                    />
                                )}
                            </>
                        )
                    }
                </>)}

                <button className='btn  --poppins --black --small' onClick={() => handleSubmit()}>
                    {view === "create" && "Create"}
                    {view === "update" && "Update"}
                    {view === "delete" && "Delete"}
                </button>
            </div>
        </div >
    )
}

export default ProductModal;