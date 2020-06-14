import React, {useContext} from "react";
import {Router, Redirect, navigate} from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import {UserContext} from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import './HomePage.css'
import DonationTypesPage from "./DonationTypesPage";
import setBackgroundColor from "../utils/setBackground";
import * as colors from "../colors"
import DonateAvail from "./DonateAvail";
import SupplyDelivered from "./SupplyDelivered";
import SupplyPickup from "./SupplyPickup";
import SupplyRequest from "./SupplyRequest";
import HomeWithSignOut from "./HomeWithSignOut";
import HospitalsNearbyPage from "./HospitalsNearby";
import HospitalInfoPages from "./HospitalInfo";
import DonationRequestPage from "./DonationRequest";
import ThankYouPage from "./ThankYou";

function Application() {
    return (
        <Router>
            <PublicRoute component={SignUp} path="signUp" track="org"/>
            <PublicRoute component={SignIn} path="signIn" track="user"/>
            <PublicRoute component={PasswordReset} path="passwordReset" track="org"/>
            <PublicRoute component={HomeWithSignOut} path="signOut" track="user"/>
            <PublicRoute component={HomePage} path="/" track="user"/>

            <ProtectedRoute component={DonationTypesPage} path="/donationType" track="user"/>
            <ProtectedRoute component={HospitalsNearbyPage} path="/hospitalsNearby" track="org"/>
            <ProtectedRoute component={HospitalInfoPages} path="/hospitalInfo" track="user"/>
            <ProtectedRoute component={DonationRequestPage} path="/donateRequest" track="user"/>
            <ProtectedRoute component={ThankYouPage} path="/thankYou" track="user"/>

            <ProtectedRoute component={SupplyRequest} path="/hospital" track="org" />
            <ProtectedRoute component={SupplyRequest} path="/supplyRequest" track="org" />
            <ProtectedRoute component={DonateAvail} path="/donateAvail" track="org"/>
            <ProtectedRoute component={SupplyPickup} path="/supplyPickup" track="org"/>
            <ProtectedRoute component={SupplyDelivered} path="/supplyDelivered" track="org"/>
        </Router>
    );
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    const user = useContext(UserContext);
    if (!user) {
        setBackgroundColor(colors.USER_COLOR);
        navigate(`/signIn?backTrack=${rest.path}`, {state:{backTrackUrl: rest.path}});
    }
    return (
        <Component {...rest} />
    )
};

const PublicRoute = ({component: Component, ...rest}) => {
    const user = useContext(UserContext);
    console.info(rest);
    if(user){
        return <HomeWithSignOut/>;
    }else{
        if (rest.track === 'user') {
            setBackgroundColor(colors.USER_COLOR)
        }else if(rest.track === 'org'){
            setBackgroundColor(colors.ORG_COLOR);
        }
        return (
            <Component {...rest} />
        )
    }
};

export default Application;