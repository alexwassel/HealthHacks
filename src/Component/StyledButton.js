import React from "react";
import './StyledButton.css';


function StyledButton(props) {
    return (
        <a href="javascript:void(0)" onClick={props.onClick} className="s-button-link" style={props.style}>
            {props.children || 'button'}
        </a>
    );
}

export default StyledButton;