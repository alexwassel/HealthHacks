import React, {useState} from "react";
import {Link} from "@reach/router";
import {signInWithGoogle} from "../firebase";
import {auth} from "../firebase";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import './SignIn.css'
import StyledButton from "../Component/StyledButton";

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailMethod, setEmailMethod] = useState(false);

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            ToastsStore.error("Error signing in", 5000);
            console.error("Error signing in with password and email", error);
        });
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;
        if (name === 'userEmail') {
            setEmail(value);
        } else if (name === 'userPassword') {
            setPassword(value);
        } else if (name === 'changeMethod') {
            setEmailMethod(value);
        }
    };


    return (
        <div className="container justify-content-center">
            <img src='/pages/login.png' className="background-image" alt="login"/>
            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT}/>
            <span className="login-logo">Log In</span>
            <span style={{height: '10vh'}}/>
            {
                isEmailMethod ?
                    <form style={{marginTop: 0, display: 'flex', flexDirection: 'column', 'align-items': 'center'}}>
                        <label htmlFor="userEmail" className="signin-email">
                            Email: &nbsp;&nbsp;
                        </label>
                        <input
                            type="email"
                            name="userEmail"
                            value={email}
                            placeholder="E.g: example@example.com"
                            id="userEmail"
                            onChange={(event) => onChangeHandler(event)}
                        />
                        < br/>
                        <label htmlFor="userPassword" className="pwd-for" style={{color:'#fff'}}>
                            Password: &nbsp;&nbsp;
                        </label>
                        <input
                            type="password"

                            name="userPassword"
                            value={password}
                            placeholder="Your Password"
                            id="userPassword"
                            onChange={(event) => onChangeHandler(event)}
                        />
                        <br/>
                        <button className="email-signin"
                                onClick={(event) => {
                                    signInWithEmailAndPasswordHandler(event, email, password)
                                }}>
                            Sign in
                        </button>
                    </form>
                    :
                    <StyledButton
                        onClick={() => {
                            onChangeHandler({currentTarget: {name: 'changeMethod', value: true}})
                        }}
                        style={{marginBottom: '5vh', color: "white", backgroundColor: "#ff443a"}}>
                        Email Login
                    </StyledButton>
            }
            {
                isEmailMethod ?
                    null
                    :
                    <StyledButton
                        onClick={() => {
                            signInWithGoogle();
                        }}
                        style={{marginBottom: '5vh', color: "white", backgroundColor: "#af256e"}}>Google
                        Login
                    </StyledButton>
            }

            <span style={{height: '10vh'}}/>
        </div>
    );
};
function getSpacerHeight() {

}

export default SignIn;