import React, {useContext} from "react";
import {UserContext} from "../providers/UserProvider";
import {navigate} from "@reach/router";
import {auth} from "../firebase";

const ProfilePage = () => {
    const user = useContext(UserContext);
    const {photoURL, displayName, email} = user;
    console.log(user);

    return (
        <div>
            <div>
                <div
                    style={{
                        background: `url(${photoURL || 'https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg'})  no-repeat center center`,
                        backgroundSize: "cover",
                        height: "200px",
                        width: "200px"
                    }}
                ></div>
                <div>
                    <h2>{displayName}</h2>
                    <h3>{email}</h3>
                </div>
            </div>
            <button onClick={() => {
                auth.signOut()
            }}>Sign out
            </button>
        </div>
    )
};

export default ProfilePage;