import React from 'react';
import { ErrorMessage, useField } from 'formik';

import '../assets/css/text-field.css';

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-3">
            {label && <label htmlFor={field.name} className="form-label">{label}</label>}
            <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} />
            <ErrorMessage component='small' name={field.name} className='text-danger fw-bold' />
        </div>
    )
}

export default TextField;
