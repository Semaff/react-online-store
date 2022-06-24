import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MyInput } from '../../components';
import { Timeline } from '../../containers';
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from '../../router/routerConsts';
import "./Auth.scss";

const Auth = () => {
    const isLoginPage = window.location.pathname === "/signin";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password)
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
                            changeValue={setUsername}
                            labelText="Username"
                            name="username"
                            type="text"
                            placeholder="Daniel"
                        />

                        <MyInput
                            isImportant
                            value={password}
                            changeValue={setPassword}
                            labelText="Password"
                            name="password"
                            type="password"
                            placeholder="********"
                        />

                        <button type='submit' className="btn  --black --poppins">
                            {isLoginPage ? "Sign In" : "Sign Up"}
                        </button>

                        <div className="auth__redirec">
                            Already have an account?
                            {isLoginPage
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