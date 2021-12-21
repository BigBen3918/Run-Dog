import React from "react";
import Routes from "./router/index";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

function App() {
    return (
        <>
            <Routes />
            <NotificationContainer />
        </>
    );
}

export default App;
