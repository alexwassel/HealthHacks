import React from "react";
import './HospitalInfo.css'
import StyledButton from "../Component/StyledButton";
import {navigate} from "@reach/router";

function HospitalInfoPages(props) {
    return (
        <div className="container hospital-info">
            <img src='/pages/hospInfo.png' className="background-image" alt="hospital info"/>
            <h1>
                {props.location.state.hospitalName}
            </h1>
            <span>
                Equipments & Supplies Needed
            </span>
            <ul>
                <li>Face mask - 200</li>
                <li> Visor - 50</li>
                <li>Goggles - 0</li>
                <li>Gloves - 150</li>
                <li>Scrubs - 30</li>
                <li>Shoes - 0</li>
                <li>Ventilators - 10</li>
                <li>Other - 0</li>
            </ul>
            <span className="row">
                <StyledButton onClick={()=>{navigate('/donateRequest')}} style={{backgroundColor: "#ff443a", color:"white", width: "unset"}}>Contact</StyledButton>
                <div style={{fontSize: "24px", paddingTop: '10px'}}>
                    VMC Foundation now!
                </div>
            </span>
        </div>
    )
}

export default HospitalInfoPages;