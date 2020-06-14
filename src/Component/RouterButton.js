import React from "react";
import {Link} from "@reach/router";
import './RouterButton.css';


function RouterButton(props) {
    return (
        <Link to={props.dest || props.to} className="r-button-link" style={props.style} onClick={props.onClick||function(){}}>
            {props.children || 'button'}
        </Link>
    );
}

export default RouterButton;