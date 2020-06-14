import React from "react";
import './ThankYou.css';
import {Link} from '@reach/router'
import RouterButton from "../Component/RouterButton";

function ThankYouPage (){
    return (
        <div className="container justify-content-center">
            <img src='/pages/thankyouscreen.png' className="background-image" alt="thanking page"/>
            <div className="navbar">
                <RouterButton to="/donationType" style={{color: "white", backgroundColor: "#ff443a", borderRadius: "0"}}>One More Time?</RouterButton>
                <RouterButton to="/"
                              style={{color: "white", backgroundColor: "#af256e", borderRadius: "0"}}>Share!</RouterButton>
            </div>
        </div>
    )
}
export default ThankYouPage;