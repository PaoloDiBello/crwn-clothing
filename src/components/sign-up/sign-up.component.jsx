import React, { Component } from 'react'
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../firebase/firebase.utils'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }


    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password don't match")
            return
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName });
            alert('account has been ccreated successfully')
            this.setState({ displayName: '', email: '', password: '', confirmPassword: '' })

        } catch (e) {
            console.error(e)
            e.message && alert(e.message)
        }
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput name="displayName" type="text" label="Display name" value={displayName} handleChange={this.handleChange} required />
                    <FormInput name="email" type="email" label="Email" value={email} handleChange={this.handleChange} required />
                    <FormInput name="password" type="password" label="Password" value={password} handleChange={this.handleChange} required />
                    <FormInput name="confirmPassword" type="password" label="Confirm Password" value={confirmPassword} handleChange={this.handleChange} required />

                    <div className="buttons">
                        <CustomButton type='submit'> Sign Up </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignUp;