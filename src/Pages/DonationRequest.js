import React from "react";
import './DonationRequest.css'
import {useInput} from "../utils/input-hook";
import {navigate} from "@reach/router";

function DonationRequestPage() {
    const {value: faceMask, bind: bindFaskMask, reset: resetFaskMask} = useInput('Alex Wassel');
    const {value: gloves, bind: bindGloves, reset: resetGloves} = useInput('awassel@gmail.com');
    const {value: scrubs, bind: bindScrubs, reset: resetScrubs} = useInput('(703)-948-7890');
    const {value: shoes, bind: bindShoes, reset: resetShoes} = useInput('50 face masks, 80 gloves');
    const {value: ventilators, bind: bindVentilators, reset: resetVentilators} = useInput('06/14/20');
    const {value: other, bind: bindOther, reset: resetOther} = useInput('02:00pm');
    const {value: additionalInfo, bind: bindAdditional, reset: resetAdditional} = useInput('I will be waiting at the emergency lane');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        resetFaskMask();
        resetGloves();
        resetShoes();
        resetAdditional();
        resetScrubs();
        resetVentilators();
        resetOther();
        navigate("/thankYou", {state: {faceMask, gloves, scrubs, shoes, ventilators, other, additionalInfo}})
    };

    return (
        <div className="container justify-content-center donation-type" onSubmit={handleSubmit}>
            <img src='/pages/donateRequestform.png' className="background-image" alt="donation request form"/>
            <form style={{margin: 'unset'}}>
                <label style={{fontSize: '125%', fontWeight: 'heavy'}}>Enter your information:</label>
                <br/>
                <label>Name <input type="text"{...bindFaskMask} placeholder="Alex Hatch"/> </label>
                <label>Email <input type="text"{...bindGloves}/> </label>
                <label>Phone <input type="text"{...bindScrubs}/> </label>
                <label>Supplies <input type="text"{...bindShoes}/> </label>
               <br/>
                <label>Date <input type="text"{...bindVentilators}/> </label>
                <label>Time <input type="text"{...bindOther} placeholder="ex) 20 Cans"/> </label>
                <br/>
                <label>Additional Information <input type="text"{...bindAdditional} placeholder="ex) 20 Cans"/> </label>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default DonationRequestPage;