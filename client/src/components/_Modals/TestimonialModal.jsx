import React from 'react';
import MyInput from '../_Inputs/MyInput/MyInput';
import MySelect from '../_Inputs/MySelect/MySelect';
import MyTextArea from '../_Inputs/MyTextArea/MyTextArea';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Modal.scss";
import { createTestimonial, deleteTestimonial, selectTestimonials, updateTestimonial } from '../../store/testimonialsSlice';
import { useEffect } from 'react';

const TestimonialModal = ({ show, setShow, view }) => {
    /* Select all we need */
    const testimonials = useSelector(selectTestimonials);
    const dispatch = useDispatch();

    /* Testimonial content */
    const [img, setImg] = useState(null);
    const [testimonialName, setTestimonialName] = useState("");
    const [testimonialProfession, setTestimonialProfession] = useState("");
    const [testimonialContent, setTestimonialContent] = useState("");

    /* Options for MySelect */
    const testimonialsOptions = testimonials.map(testim => testim.name + `(Id: ${testim.id})`);
    const [option, setOption] = useState(testimonialsOptions[0]);

    useEffect(() => {
        setOption(testimonialsOptions[0]);
    }, [testimonialsOptions]);

    const handleSubmit = () => {
        const testimonialId = +option.match(/(?<=\(Id: ).+(?=\))/g);
        const formData = new FormData();
        formData.append("name", testimonialName);
        formData.append("profession", testimonialProfession);
        formData.append("content", testimonialContent);
        formData.append("img", img);

        if (view === "create") {
            dispatch(createTestimonial(formData));
        } else if (view === "update") {
            dispatch(updateTestimonial({ id: testimonialId, formData }));
        } else if (view === "delete") {
            dispatch(deleteTestimonial(testimonialId));
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
                        <span> Category</span>
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
                        <MyInput
                            labelText="Testimonial's image"
                            type="file"
                            isImportant
                            onChange={e => setImg(e.target.files[0])}
                        />

                        <MyInput
                            labelText="Name"
                            name="name"
                            placeholder="Name.."
                            isImportant
                            value={testimonialName}
                            onChange={e => setTestimonialName(e.target.value)}
                        />

                        <MyInput
                            labelText="Profession"
                            name="profession"
                            placeholder="Profession.."
                            isImportant
                            value={testimonialProfession}
                            onChange={e => setTestimonialProfession(e.target.value)}
                        />

                        <MyTextArea
                            labelText="Content"
                            name="content"
                            placeholder="Content.."
                            value={testimonialContent}
                            onChange={e => setTestimonialContent(e.target.value)}
                        />
                    </>
                )}

                {view === "update" && (
                    <>
                        <MySelect
                            labelText="Choose testimonial"
                            name="testimonial"
                            isImportant
                            options={testimonialsOptions}
                            onChange={(e) => setOption(e.target.value)}
                        />

                        <MyInput
                            labelText="Update image"
                            type="file"
                            isImportant
                            onChange={e => setImg(e.target.files[0])}
                        />

                        <MyInput
                            labelText="Update name"
                            placeholder="Testimonial name.."
                            name="name"
                            value={testimonialName}
                            onChange={e => setTestimonialName(e.target.value)}
                        />

                        <MyInput
                            labelText="Update profession"
                            placeholder="Testimonial profession.."
                            name="profession"
                            value={testimonialProfession}
                            onChange={e => setTestimonialProfession(e.target.value)}
                        />

                        <MyTextArea
                            labelText="Content"
                            name="content"
                            placeholder="Content.."
                            value={testimonialContent}
                            onChange={e => setTestimonialContent(e.target.value)}
                        />
                    </>
                )}

                {view === "delete" && (
                    <MySelect
                        labelText="Delete category"
                        name="category"
                        options={testimonialsOptions}
                        onChange={(e) => setOption(e.target.value)}
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

export default TestimonialModal;