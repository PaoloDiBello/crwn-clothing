import React, { Component } from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (e) {
            console.error(e)
            this.setState({ email: '', password: '' })
            alert(e.message)

        }

    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput name="email"
                        type="email"
                        value={email}
                        label="email"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput name="password" type="password"
                        value={password}
                        label="password"
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} type='submit' isGoogleSignIn> {' '}Sign in with Google{' '} </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;