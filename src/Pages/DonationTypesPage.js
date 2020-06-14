import React, {useEffect, useState} from "react";
import {useInput} from '../utils/input-hook';
import './DonationTypesPage.css'
import {navigate} from "@reach/router";
import tmpStyle from "../utils/tmpStyle";

function DonationTypesPage() {
    const {value: faceMask, bind: bindFaskMask, reset: resetFaskMask} = useInput(0);
    const {value: gloves, bind: bindGloves, reset: resetGloves} = useInput(0);
    const {value: scrubs, bind: bindScrubs, reset: resetScrubs} = useInput(0);
    const {value: shoes, bind: bindShoes, reset: resetShoes} = useInput(0);
    const {value: ventilators, bind: bindVentilators, reset: resetVentilators} = useInput(0);
    const {value: other, bind: bindOther, reset: resetOther} = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        resetFaskMask();
        resetGloves();
        resetShoes();
        resetScrubs();
        resetVentilators();
        resetOther();
        navigate("/hospitalsNearby", {state: {faceMask, gloves, scrubs, shoes, ventilators, other}})
    };

    useEffect(() => {
        tmpStyle();
    });

    return (
        <div className="container justify-content-center donation-type" onSubmit={handleSubmit}>
            <img src='/pages/donationType.png' className="background-image" alt="donation types"/>
            <form>
                <label style={{fontSize: '125%', fontWeight: 'heavy'}}>Enter what you have:</label>
                <br/>
                <label>Face mask <input type="number"{...bindFaskMask}/> </label>
                <br/>
                <label>Gloves <input type="number"{...bindGloves}/> </label>
                <br/>
                <label>Scrubs <input type="number"{...bindScrubs}/> </label>
                <br/>
                <label>Shoes <input type="number"{...bindShoes}/> </label>
                <br/>
                <label>Ventilators <input type="number"{...bindVentilators}/> </label>
                <br/>
                <label>Other <input type="text"{...bindOther} placeholder="ex) 20 Cans"/> </label>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default DonationTypesPage;