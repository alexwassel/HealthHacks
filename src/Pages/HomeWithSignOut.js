import React from "react";
import {auth} from "../firebase";
import StyledButton from "../Component/StyledButton";

function HomeWithSignOut() {
    return (
        <div className="container">
            <StyledButton style={{backgroundColor: "#ff443a", color:"white"}} onClick={() => {
                auth.signOut()
            }}>Sign out</StyledButton>
        </div>
    )
}

export default HomeWithSignOut;