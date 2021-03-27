export const contentSwitchEventName = "switch-content";

/**
 * Fires an event to trigger content swap.
 *
 * @param {string} routeName defined in routes.js
 */
export const fireContentSwitchEvent = (routeName) => {
    const event = new Event(contentSwitchEventName, { detail: { routeName } });
    window.dispatchEvent(event);
};


/**
 * Adds the event listener to the window element and callback to set the route name.
 * @param {function} setRouteName
 */
export const initializeContentSwitch = (setRouteName) => {
    console.debug(`Add event listener: ${contentSwitchEventName}`);
    window.addEventListener(contentSwitchEventName, (event) => {
        const newRouteName = event.detail.routeName;
        console.info(`Swap content to "${newRouteName}"`);
        setRouteName(newRouteName);
    });
    setRouteName("home");
};
