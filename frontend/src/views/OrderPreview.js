import { Button } from "../components/Button/Button";
import {fireContentSwitchEvent} from "../events/ContentSwitch";

export const OrderPreview = () => {
    const handleConfirmOrder = () => {
        console.info("Order confirmed");
        fireContentSwitchEvent("orderList");
    };

    return (
        <div>
            <h1>Checkout</h1>

            <h2>Payment Method</h2>

            <Button onClick={handleConfirmOrder} text="Confirm order" />
        </div>
    );
};
