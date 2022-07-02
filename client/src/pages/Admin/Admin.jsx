import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrandModal, CategoryBrandModal, CategoryModal, ProductModal, TestimonialModal } from '../../components';
import { Timeline } from '../../containers';
import { fetchBrands } from '../../store/brandsSlice';
import { fetchCategories } from '../../store/categoriesSlice';
import { fetchProducts } from '../../store/productsSlice';
import { fetchTestimonials } from '../../store/testimonialsSlice';
import "./Admin.scss";

const AdminBlock = ({ title, children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="admin__block">
            <div className="admin__block-title">
                <h4>{title}</h4>
                <button
                    type="button"
                    className={`toggle ${visible ? "active" : ""}`}
                    onClick={() => setVisible(!visible)}
                />
            </div>

            <div className="admin__block-content" style={{ maxHeight: visible ? "unset" : "", paddingTop: visible ? "2rem" : "" }}>
                {children}
            </div>
        </div>
    )
}

const AdminList = ({ setView, setVisible, name, withoutUpdate }) => {
    return (
        <ul className='admin__list'>
            <li>
                <button className='btn --poppins --black --small' onClick={() => {
                    setView("create")
                    setVisible(true);
                }}>
                    Create {name}
                </button>
            </li>

            {!withoutUpdate && (
                <li>
                    <button className='btn --poppins --black --small' onClick={() => {
                        setView("update")
                        setVisible(true);
                    }}>
                        Update {name}
                    </button>
                </li>
            )}

            <li>
                <button className='btn --poppins --black --small' onClick={() => {
                    setView("delete")
                    setVisible(true);
                }}>
                    Delete {name}
                </button>
            </li>
        </ul>
    )
}

const Admin = () => {
    const [categoryVisible, setCategoryVisible] = useState(false);
    const [categoryView, setCategoryView] = useState("create");

    const [brandVisible, setBrandVisible] = useState(false);
    const [brandView, setBrandView] = useState("update");

    const [categoryBrandVisible, setCategoryBrandVisible] = useState(false);
    const [categoryBrandView, setCategoryBrandView] = useState("update");

    const [productVisible, setProductVisible] = useState(false);
    const [productView, setProductView] = useState("update");

    const [testimonailVisible, setTestimonialVisible] = useState(false);
    const [testimonailView, setTestimonialView] = useState("update");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBrands());
        dispatch(fetchCategories());
        dispatch(fetchTestimonials());
        dispatch(fetchProducts("getall=true"));
    }, [dispatch])

    return (
        <>
            <Timeline page="Admin" />

            <CategoryModal show={categoryVisible} setShow={setCategoryVisible} view={categoryView} />
            <BrandModal show={brandVisible} setShow={setBrandVisible} view={brandView} />
            <CategoryBrandModal show={categoryBrandVisible} setShow={setCategoryBrandVisible} view={categoryBrandView} />
            <ProductModal show={productVisible} setShow={setProductVisible} view={productView} />
            <TestimonialModal show={testimonailVisible} setShow={setTestimonialVisible} view={testimonailView} />

            <section className="section  --fullPadding">
                <div className="container  --shrinked">
                    <div className="admin">
                        <h2 className="admin__title">Delete/Update or Create:</h2>

                        <div className="admin__control">
                            <AdminBlock title="Category">
                                <AdminList
                                    setView={setCategoryView}
                                    setVisible={setCategoryVisible}
                                    name="Category"
                                />
                            </AdminBlock>

                            <AdminBlock title="Brand">
                                <AdminList
                                    setView={setBrandView}
                                    setVisible={setBrandVisible}
                                    name="Brand"
                                />
                            </AdminBlock>

                            <AdminBlock title="Category's Brand">
                                <AdminList
                                    setView={setCategoryBrandView}
                                    setVisible={setCategoryBrandVisible}
                                    name="Category's Brand"
                                    withoutUpdate
                                />
                            </AdminBlock>

                            <AdminBlock title="Product">
                                <AdminList
                                    setView={setProductView}
                                    setVisible={setProductVisible}
                                    name="Product"
                                />
                            </AdminBlock>

                            <AdminBlock title="Testimonial">
                                <AdminList
                                    setView={setTestimonialView}
                                    setVisible={setTestimonialVisible}
                                    name="Testimonial"
                                />
                            </AdminBlock>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Admin;