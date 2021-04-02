import { Button } from "../components/Button/Button";
import { fireContentSwitchEvent } from "../events/ContentSwitch";
import { fireNotificationEvent } from "../events/NotificationEvent";

export const OrderPreview = () => {
    const handleConfirmOrder = () => {
        console.info("Order confirmed");
        fireContentSwitchEvent("orderList");
        fireNotificationEvent("Order received, We are now preparing your order.");
    };

    return (
        <div>
            <h1>Checkout</h1>

            <h2>Payment Method</h2>

            <Button onClick={handleConfirmOrder} text="Confirm order" />
        </div>
    );
};
