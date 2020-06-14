import React, {useEffect} from "react";
import './DonateAvail.css'
import tmpStyle from "../utils/tmpStyle";
import {navigate} from "@reach/router";
import useDoubleClick from "../utils/doubleClick";
import RouterButton from "../Component/RouterButton";

function DonateAvail() {

    const [refCallback, elem] = useDoubleClick(donorDetail);


    useEffect(() => {
        tmpStyle();
    });


    function donorDetail() {
        let hospitalName = "VMCFoundation";
        navigate('/supplyPickup', {state: {hospitalName}});
    }

    return (
        <div className="container justify-content-center">
            <div className="navbar">
                <RouterButton to="/supplyRequest" style={{color: "white", backgroundColor: "#ff443a", borderRadius: "0"}}>Request More Supplies</RouterButton>
                <RouterButton to="/supplyPickup"
                              style={{color: "white", backgroundColor: "#af256e", borderRadius: "0"}}>Scan Delivery
                    Code</RouterButton>
            </div>
            <img src='/pages/donateAval.png' className="background-image" alt="hospitals neaby"/>
            <div className="no-scroll-bars" style={{height: '74vh'}}>
                <div className="image-container" ref={refCallback}>
                    <img src='/res/big-map-to-scroll.PNG' alt="map image" className="big-map"/>
                </div>
            </div>
            <div className="footer-hints">Double click on the map to find available donors!</div>
        </div>
    )
}

export default DonateAvail;