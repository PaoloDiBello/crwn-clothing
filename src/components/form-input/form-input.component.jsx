
import React from 'react'
import './form-input.styles.scss'

const FormInput = ({ handleChange, label, value, ...restProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...restProps} />
            {
                label ?
                    (<label className={
                        `${value.length ? 'shrink' : ''}
                    form-input-label`}>{label}</label>) : null
            }
        </div>
    )
}

export default FormInput
