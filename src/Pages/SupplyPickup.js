import React from "react";
import './SupplyPickup.css'
import RouterButton from "../Component/RouterButton";
import {useInput} from "../utils/input-hook";
import {navigate} from "@reach/router";

function SupplyPickup() {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        navigate("/supplyDelivered")
    };

    return (
        <div className="container justify-content-center donation-type">
            <img src='/pages/supplyPickup.png' className="background-image" alt="supply pickup"/>
            <div className="navbar">
                <RouterButton to="/donateAvail" style={{color: "white", backgroundColor: "#ff443a", borderRadius: "0"}}>Back
                    to
                    Donor Availabilities</RouterButton>
                <RouterButton to="/supplyPickup"
                              style={{color: "white", backgroundColor: "#af256e", borderRadius: "0"}}>Scan Delivery
                    Code</RouterButton>
            </div>
            <form style={{margin: '80px 0 0 0', maxWidth: '450px'}} onSubmit={handleSubmit}>
                <label style={{fontSize: '125%', fontWeight: 'heavy'}}>Please select a suitable receive
                    time:</label>
                <br/>
                <label>Date
                    <select>
                        <option value="volvo">06/14/20</option>
                        <option value="saab">06/15/20</option>
                        <option value="opel">06/16/20</option>

                        <option value="udi">06/17/20</option>
                        <option value="adi">06/18/20</option>
                        <option value="aui">06/19/20</option>
                        <option value="aud">06/20/20</option>
                    </select>
                </label>
                <label>Time
                    <select>
                        <option value="volvo">2:00pm</option>
                        <option value="saab">3:00pm</option>
                        <option value="opel">4:00pm</option>
                        <option value="volvo">5:00pm</option>
                        <option value="saab">6:00pm</option>
                        <option value="opel">7:00pm</option>
                    </select> </label>
                <br/>
                <span className="row" style={{margin: '20px 0 20px 0', padding: '7.5vh 0 4.5vh 0'}}>
                <input type="submit" value="submit"/>
                <input type="submit" value="reset" style={{marginLeft: '5px'}}/>
                </span>
            </form>
        </div>
    )
}
export default SupplyPickup;