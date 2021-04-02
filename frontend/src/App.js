import React, { useEffect, useState } from "react";
import { Menu } from "./components/Menu/Menu";
import { Notification } from "./components/Notification/Notification";
import { initializeContentSwitch } from "./events/ContentSwitch";
import { routes } from "./routes";

/**
 * The root component for the frontend application.
 * @constructor
 */
export const App = () => {
    // null is used to indicate that page is not loaded.
    const [routeName, setRouteName] = useState(null);

    useEffect(() => {
        console.info("Initializing SPA...");
        initializeContentSwitch(setRouteName);
        setRouteName("sandwichList");
    }, []);

    return (
        <div>
            <Menu />
            <main>
                <Notification />
                {routes[routeName]}
            </main>
        </div>
    );
};
