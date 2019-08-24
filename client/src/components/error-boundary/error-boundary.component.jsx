import React, { Component } from 'react'

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error.boundary.styles'

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // process the error
        return { hasError: true }
    }


    componentDidCatch(error, info) {
        console.log('error', error)
    }

    render() {

        if (this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={"https://i.imgur.com/QIxIKBH.png"} />
                    <ErrorImageText>An error has accurred, please don't feed the ghost. </ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;

    }
}


