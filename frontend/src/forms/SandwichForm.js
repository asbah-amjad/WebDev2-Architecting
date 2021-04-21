import {useState} from "react";
import {BreadTypes, NotificationLevel} from "../enums";
import {fireNotificationEvent} from "../events/NotificationEvent";
import {SandwichService} from "../services/SandwichService";

export const SandwichForm = () => {
    const [data, setData] = useState({
        name: "",
        toppings: [],
        breadType: "",
        price: ""
    });

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        SandwichService.create(data)
            .then(() => fireNotificationEvent(`Sandwich ${data.name} added.`))
            .catch(() => fireNotificationEvent("Failed to add sandwich", NotificationLevel.ERROR));
    };

    console.log(data);
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name*:
                <input type="text" name="name" value={data.name} onChange={handleChange}/>
            </label>
            <label>
                Price*:
                <input type="number" name="price" value={data.price} onChange={handleChange} />
            </label>

            {Object.entries(BreadTypes).map(([_, breadType]) => (
                <label>
                    <input type="radio" name="breadType" value={breadType} onChange={handleChange}/>
                    {breadType}
                </label>)
            )}
            <button>Add</button>
        </form>
    );
};
