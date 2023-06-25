import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';
import SelectInput from '../common/SelectInput';


export const CourseForm = ({ handleSubmit, pristine, reset, submitting, heading, authors, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>

            <Field
                type="text"
                name="title"
                label="Sachin Tendulkar"
                placeholder="Title of the course"
                component={FieldInput}
            />

            <Field
                name="authorId"
                label="Yuvaraj Sing Man Of the Series"
                options={authors}
                component={SelectInput}
            />

            <Field
                type="text"
                name="category"
                label="Shewag"
                placeholder="Category of the course"
                component={FieldInput}
            />

            <Field
                type="text"
                name="length"
                label="World Cup 2011"
                placeholder="Lenght of course in minutes or hours"
                component={FieldInput}
            />

            <div>
                <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit</button>

                {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Clear Values</button>}

                <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};





const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.category) {
        errors.category = 'Required';
    }

    if (!values.length) {
        errors.length = 'Required';
    }

    if (!values.authorId) {
        errors.authorId = 'Required';
    }

    return errors;
};



export default reduxForm({
    form: 'CourseForm',
    validate
})(CourseForm);
