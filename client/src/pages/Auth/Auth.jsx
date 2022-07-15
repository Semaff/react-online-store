import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyInput } from '../../components';
import { Timeline } from '../../containers';
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from '../../router/routerConsts';
import { useDispatch } from "react-redux";
import { signin, signup } from '../../store/userSlice';
import "./Auth.scss";

const Auth = () => {
    const isSigninPage = window.location.hash === "#/signin";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            if (isSigninPage) {
                dispatch(signin({ username, password }))
            } else {
                dispatch(signup({ username, password }))
            }
        }
        navigate("/");
    }

    return (
        <>
            <Timeline page="Auth" />

            <section className="section  --fullPadding" style={{ background: "url('./images/about-bg.jpg') center no-repeat" }}>
                <div className="container">
                    <form className="auth" onSubmit={e => handleSubmit(e)}>
                        <MyInput
                            isImportant
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            labelText="Username"
                            name="username"
                            type="text"
                            placeholder="Daniel"
                        />

                        <MyInput
                            isImportant
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            labelText="Password"
                            name="password"
                            type="password"
                            placeholder="********"
                        />

                        <button type='submit' className="btn  --black --poppins">
                            {isSigninPage ? "Sign In" : "Sign Up"}
                        </button>

                        <div className="auth__redirec">
                            Already have an account?
                            {isSigninPage
                                ? <Link to={SIGNUP_ROUTE}> Signup</Link>
                                : <Link to={SIGNIN_ROUTE}> Signin</Link>
                            }
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Auth;