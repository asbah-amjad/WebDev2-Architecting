import React, { useEffect, useState } from "react";
import { Menu } from "./components/Menu/Menu";
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

    return <div>
        <Menu />
        {routes[routeName]}
    </div>;
};
