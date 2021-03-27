import {fireContentSwitchEvent} from "../../events/ContentSwitch";
import styles from "./Menu.module.css";

const menuItems = [
    {
        "name": "home",
        "display": "Sandwiches"
    },
    {
        "name": "orders",
        "display": "Orders"
    }
];

export const Menu = () => {
    const handleClick = (event) => {
        fireContentSwitchEvent(event.target.name);
    };

    return (
        <div className={styles.container}>
            <nav>
                {
                    menuItems.map(item => (
                        <button key={item.name} name={item.name} onClick={handleClick}>
                            {item.display}
                        </button>
                    ))
                }
            </nav>
        </div>
    );
};
