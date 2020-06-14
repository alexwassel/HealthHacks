import React from "react";
import Application from "./Pages/Application";
import UserProvider from "./providers/UserProvider";
import './App.css';

function App() {
    return (
        <UserProvider>
            <Application/>
        </UserProvider>
    );
}
export default App;
