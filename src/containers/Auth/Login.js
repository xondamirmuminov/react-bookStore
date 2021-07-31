import React, { useState, useCallback } from 'react';
import axios from '../../utils/axios';
import Sign from '../../style/StyleSignUp';
import { useHistory } from 'react-router-dom';
import SignImage from '../../assets/auth/login.svg';
import Swal from 'sweetalert2/dist/sweetalert2.js'

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const [stay, setStay] = useState(false);
    const history = useHistory();
    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setValues(state => ({ ...state, [name]: value }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const valueusInput = values;
        axios.post('/login', valueusInput)
            .then(data => {
                console.log(data)
                const { success, token, user } = data.data;
                if (success) {
                    localStorage.setItem('token', token)
                    localStorage.setItem('user', user)
                    history.push('/')
                }
            })
            .catch(err => {
                console.log(err.message)
                Swal.fire({
                    title: 'Error',
                    text: err.message,
                    icon: 'error',
                    showCancelButton: true,
                })
            })
    }
    return (
        <Sign>
            <img src={SignImage} alt="ice-cream vendor" className="signup__img" />
            <form onSubmit={handleSubmit}>
                <h1>Log In</h1>
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
                <button className="form__btn" type="submit">Log In</button>
            </form>
        </Sign>
    )
}

export default Login;