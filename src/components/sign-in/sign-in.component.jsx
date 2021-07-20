import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'


import './sign-in.styles.scss'


class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        console.log('handle submit....')
        event.preventDefault()
        const { email, password } = this.state
        await  auth.createUserWithEmailAndPassword(email, password)
        this.setState({'email': '', 'password': ''})
        
    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name] :value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span> Sign In with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handlechange={this.handleChange} 
                        label="Enter your email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                    />
                    <FormInput 
                        handlechange={this.handleChange} 
                        label="Enter your password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" isGoogleSignIn={false}>Submit</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {' ' }SignIn WithGoogle{' ' }
                        </CustomButton>

                    </div>
                    
                </form>
            </div>


        )
    }
}

export default SignIn