import React, {useContext, useState} from "react";
import { render } from "react-dom";
import {Link} from "@reach/router";
import {auth, signInWithGoogle, generateUserDocument} from "../firebase";
import './SignUp.css';
import setBackgroundColor from "../utils/setBackground";
import * as colors from "../colors";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);

    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        event.preventDefault();
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            generateUserDocument(user, {displayName});
        } catch (error) {
            setError('Error Signing up with email and password');
        }

        setEmail("");
        setPassword("");
        setDisplayName("");
    };

    const onChangeHandler = event => {
        const {name, value} = event.currentTarget;

        if (name === "userEmail") {
            setEmail(value);
        } else if (name === "userPassword") {
            setPassword(value);
        } else if (name === "displayName") {
            setDisplayName(value);
        }
    };

    return (
        <div className="container justify-content-center">
            <img src='/pages/signup.png' className="background-image" alt="login"/>
            <span style={{color: '#fff',marginTop:20}}>Sign Up</span>
            <div className="signup-input">
                {error !== null && (
                    <div>
                        {error}
                    </div>
                )}
                <form>
                    <label htmlFor="displayName" style={{color: '#fff'}}>
                        Display Name:
                    </label>
                    <input
                        type="text"
                        style={{margin:10}}
                        name="displayName"
                        value={displayName}
                        placeholder="E.g: Johnny"
                        id="displayName"
                        onChange={event => onChangeHandler(event)}
                    />
                    <br />
                     <label htmlFor="userEmail" className="email">
                        Email:
                    </label>
                    <input
                        style={{margin:10}}
                        type="email"
                        name="userEmail"
                        value={email}
                        placeholder="E.g: example@example.com"
                        id="userEmail"
                        onChange={event => onChangeHandler(event)}
                    />
                    <br />
                    <label htmlFor="userPassword" className="pwd" style={{color: '#fff'}}>
                        Password:
                    </label>
                    <input
                        style={{margin:10}}
                        type="password"
                        name="userPassword"
                        value={password}
                        placeholder="Your Password"
                        id="userPassword"
                        onChange={event => onChangeHandler(event)}
                    />
                    <br /><br />
                    <button
                        className="signup-button"
                        onClick={event => {
                            createUserWithEmailAndPasswordHandler(event, email, password);
                        }}
                    >
                        Sign up
                    </button>
                </form>
                <p style={{textAlign:"center",color: '#fff'}}>
                    Or if you have a Google Email Account...</p>
                <button style={{marginLeft:90}}
                    onClick={() => {
                        try {
                            signInWithGoogle();
                        } catch (error) {
                            console.error("Error signing in with Google", error);
                        }
                    }}
                >
                    Sign In with Google
                </button>
                <p style={{color: '#fff'}}>
                    Already have an account?{" "}
                    <Link to="/signIn" onClick={setBackgroundColor(colors.USER_COLOR)} style={{color: '#FFF'}}>
                        Sign in here
                    </Link>{" "}
                </p>
            </div>
        </div>
    );
};
export default SignUp;