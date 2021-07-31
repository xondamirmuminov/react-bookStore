import React, { useState, useCallback } from 'react';
import axios from '../../utils/axios';
import Sign from '../../style/StyleSignUp';
import { useHistory } from 'react-router-dom';
import SignImage from '../../assets/auth/signUp.svg';

export default function SignUp() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        lang: '',
    });
    const history = useHistory();
    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setValues(state => ({ ...state, [name]: value }));
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const valueusInput = values;
        axios.post('/sign-up', valueusInput)
            .then(data => {
                const { success, token, user } = data.data;
                if (success) {
                    alert('Your are logged in successfully')
                    localStorage.setItem('token', token)
                    localStorage.setItem('user', user)
                    history.push("/")
                }
                else {
                    alert('Error')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Sign>
            <img src={SignImage} alt="ice-cream vendor" className="signup__img" />
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <input
                    value={values.firstName}
                    onChange={handleInputChange}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                />
                <input
                    value={values.lastName}
                    onChange={handleInputChange}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                />
                <input
                    value={values.email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <input
                    value={values.password}
                    onChange={handleInputChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <input
                    value={values.phone}
                    onChange={handleInputChange}
                    type="number"
                    name="phone"
                    placeholder="Phone number"
                />
                <input
                    value={values.lang}
                    onChange={handleInputChange}
                    type="text"
                    name="lang"
                    placeholder="Language"
                />
                <button className="form__btn" type="submit">Sign Up</button>
            </form>
        </Sign>
    )
}