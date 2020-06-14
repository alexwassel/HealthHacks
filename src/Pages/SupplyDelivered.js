import React from "react";
import './SupplyDelivered.css'
import RouterButton from "../Component/RouterButton";

function SupplyDelivered (){
    return (
        <div className="container justify-content-center">
            <img src='/pages/supplyDelivered.png' className="background-image" alt="Supplies Delivered"/>
            <div className="navbar">
                <RouterButton to="/" style={{color: "white", backgroundColor: "#ff443a", borderRadius: "0"}}>Sign Out</RouterButton>
                <RouterButton to="/hospital"
                              style={{color: "white", backgroundColor: "#af256e", borderRadius: "0"}}>Return to Home</RouterButton>
            </div>
        </div>
    )
}

export default SupplyDelivered;