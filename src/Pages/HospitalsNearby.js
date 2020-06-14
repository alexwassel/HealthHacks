import React, {useEffect} from "react";
import './HospitalsNearby.css';
import {navigate} from "@reach/router";
import tmpStyle from "../utils/tmpStyle";
import useDoubleClick from "../utils/doubleClick";


function HospitalsNearbyPage (){
    const [refCallback, elem] = useDoubleClick(hospitalDetail);


    useEffect(() => {
        tmpStyle();
    });


    function hospitalDetail(){
        let hospitalName = "VMCFoundation";
        navigate('/hospitalInfo', {state: {hospitalName}});
    }

    return (
        <div className="container justify-content-center">
            <img src='/pages/nearbyHosp.png' className="background-image" alt="hospitals neaby"/>
            <div className="no-scroll-bars">
                <div className="image-container" ref={refCallback}>
                    <img src='/res/big-map-to-scroll.PNG' alt="map image" className="big-map" onDoubleClick={hospitalDetail}/>
                </div>
            </div>
        </div>
    );


}

export default HospitalsNearbyPage;