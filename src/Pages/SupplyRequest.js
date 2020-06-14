import React from "react";
import './SupplyRequest.css'
import {navigate} from "@reach/router";
import RouterButton from "../Component/RouterButton";
import {useInput} from "../utils/input-hook";

function SupplyRequest() {

    const {value: faceMask, bind: bindFaskMask, reset: resetFaskMask} = useInput('Ventilator');
    const {value: gloves, bind: bindGloves, reset: resetGloves} = useInput(2);
    const {value: scrubs, bind: bindScrubs, reset: resetScrubs} = useInput(5);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        resetFaskMask();
        resetGloves();
        resetScrubs();
    };

    return (
        <div className="container justify-content-center donation-type">
            <img src='/pages/supplyRequest.png' className="background-image" alt="supply requests"/>
            <div className="navbar">
                <RouterButton to="/donateAvail" style={{color: "white", backgroundColor: "#ff443a", borderRadius: "0"}}>See
                    Donor Availabilities</RouterButton>
                <RouterButton to="/supplyPickup"
                              style={{color: "white", backgroundColor: "#af256e", borderRadius: "0"}}>Scan Delivery
                    Code</RouterButton>
            </div>
            <form style={{margin: '80px 0 0 0'}} onSubmit={handleSubmit}>
                <label style={{fontSize: '125%', fontWeight: 'heavy'}}>Enter some information:</label>
                <br/>
                <label>Supply Name <input type="text"{...bindFaskMask} placeholder="Ventilators"/> </label>
                <label>Quantity <input type="number"{...bindGloves}/> </label>
                <label>Priority (1-10, 10 being highest) <input type="number"{...bindScrubs}/> </label>
                <br/>
                <span className="row" style={{margin: '20px 0 20px 0', padding:'7.5vh 0 4.5vh 0'}}>
                <input type="submit" value="submit"/>
                <input type="submit" value="reset" style={{marginLeft: '5px'}}/>
                </span>
            </form>
        </div>
    )
}

export default SupplyRequest;