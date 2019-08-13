
import React from 'react'

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = WrappedComponent => {

    const Spinner = ({ isLoading, ...restProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (<WrappedComponent {...restProps} />)
    }
    return Spinner
}
export default WithSpinner

