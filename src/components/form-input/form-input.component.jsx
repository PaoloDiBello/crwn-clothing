
import React from 'react'

import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles'

const FormInput = ({ handleChange, label, ...restProps }) =>
    (
        <GroupContainer>
            <FormInputContainer onChange={handleChange} {...restProps} />
            {
                label ?
                    (<FormInputLabel className={
                        `${restProps.value.length ? 'shrink' : ''
                        }`
                    }>
                        {label}
                    </FormInputLabel>) : null
            }
        </GroupContainer>
    )

export default FormInput