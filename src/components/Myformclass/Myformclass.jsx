import React from 'react';
import { FormError } from '../FormError/FormError';
import './Myformclass.css';

class Myformclass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formError: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationError = this.state.formError;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationError.email = emailValid ? '' : ' is wrong';
                break;
            case 'password':
                passwordValid = value.length >= 4;
                fieldValidationError.password = passwordValid ? '' : ' must be at least 4 characters in length';
                break;
            default:
                break;
        }
        this.setState({
            formError: fieldValidationError,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    render() {
        return (
            <form className="row">
                <h2>Sign up</h2>
                <input type="email" required name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange} className={`${this.state.emailValid ? "inputform" : "errorform"}`} />
                <input type="password" name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInputChange} className={`${this.state.passwordValid ? "inputform" : "errorform"}`} />

                <button type="submit" disabled={!this.state.formValid}>Sign up</button>
                <div>
                    <FormError formError={this.state.formError} />
                </div>
            </form>
        )
    }
}

export default Myformclass;