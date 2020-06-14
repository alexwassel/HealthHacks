import React from "react";
import ProfilePage from "./ProfilePage";
import {Link, Router} from "@reach/router";
import RouterButton from "../Component/RouterButton";
import setBackgroundColor from "../utils/setBackground";
import * as colors from "../colors"

function HomePage() {
    return (
        <div className="container justify-content-center">
            <img src='/pages/mainPage.png' className="background-image" alt="main"/>
            <span style={{height: '70vh'}}/>
            <RouterButton dest={'signIn'}
                          onClick={()=>setBackgroundColor(colors.USER_COLOR)}
                          style={{marginBottom: '5vh', color: "white", backgroundColor: "#ff443a"}}>User
                Login</RouterButton>
            <RouterButton dest={'signUp'}
                          onClick={()=>setBackgroundColor(colors.ORG_COLOR)}
                          style={{marginBottom: '5vh', color: "white", backgroundColor: "#af256e"}}>Sign
                Up</RouterButton>
            <span style={{height: '10vh'}}/>
        </div>
    );
}

export default HomePage;